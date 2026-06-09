import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";
import { JOB_STATUS } from "../utils/constants.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";
import { log } from "console";

export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const oldUser = await UserModel.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && oldUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(oldUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "update user" });
};

export const getApplicationStats = async (req, res) => {
  const users = await UserModel.countDocuments();
  const jobs = await JobModel.countDocuments();

  let stats = await JobModel.aggregate([
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
    // Output: [ { "_id": "pending", "count": +1 }, { }, ... ]
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc; // => { Closed: 64, Pending: 49, Urgent: 42, Active: 44 }
  }, {});

  const defaultStats = {
    Closed: stats.Closed || 0,
    Pending: stats.Pending || 0,
    Urgent: stats.Urgent || 0,
    Active: stats.Active || 0,
  };

  res.status(StatusCodes.OK).json({ users, jobs, defaultStats });
};
