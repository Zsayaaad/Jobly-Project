import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";
import { JOB_STATUS } from "../utils/constants.js";

export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  await UserModel.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "update user" });
};

export const getApplicationStats = async (req, res) => {
  const users = await UserModel.countDocuments();
  const jobs = await JobModel.countDocuments();

  const jobStatusStats = await JobModel.aggregate([
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
    // Output: [ { "_id": "pending", "count": 12 }, { }, ... ]
  ]);

  const jobStatusCounts = Object.values(JOB_STATUS).reduce((stats, status) => {
    // Object[Key] To Return { Key: 0 }
    stats[status] = 0; // ex: { Active: 0 } === stats.Active = 0;

    return stats; // stats is the object that contains each status and it's value.. => { Active: 3, Closed:0, ... }
  }, {});
  // reduce to iterate on the array of values of JOB_STATUS and put zeros to each value
  // jobStatusCounts: {
  //    Active: 0,
  //    Closed: 0,
  //    Urgent: 0,
  //    Pending: 0
  // }

  jobStatusStats.forEach((stat) => {
    jobStatusCounts[stat._id] = stat.count;
  });

  res.status(StatusCodes.OK).json({ users, jobs, jobStatusCounts });
};
