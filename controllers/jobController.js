import mongoose from "mongoose";
import JobModel from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs = async (req, res) => {
  // const isAdmin = req.user.role === "admin";
  const { search, jobType, jobStatus, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const KeyValue = sortOptions[sort] || sortOptions.newest;

  // PAGINATION
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const jobs = await JobModel.find(
    queryObject,
    // isAdmin ? {} : { createdBy: req.user.userId },
  )
    .sort(KeyValue)
    .skip(skip)
    .limit(limit);

  const totalJobs = await JobModel.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalJobs, currentPage: page, numOfPages, jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await JobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findById(id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true, // to return the updated one
  });
  res.status(StatusCodes.OK).json({ msg: "job modified", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await JobModel.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: deletedJob });
};

export const showStats = async (req, res) => {
  let stats = await JobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  console.log(stats);

  const defaultStats = {
    Closed: stats.Closed || 0,
    Pending: stats.Pending || 0,
    Urgent: stats.Urgent || 0,
    Active: stats.Active || 0,
  };

  res.status(StatusCodes.OK).json({ defaultStats });
};
