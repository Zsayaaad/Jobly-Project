import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import jobModel from "../models/JobModel.js";
import UserModel from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((err) => err.msg);

        if (errorMessage[0].startsWith("no job")) {
          throw new NotFoundError(errorMessage);
        }
        if (errorMessage[0].startsWith("not authorized")) {
          throw new UnauthorizedError(errorMessage);
        }
        throw new BadRequestError(errorMessage);
      }

      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company")
    .notEmpty()
    .withMessage("company is required")
    .isLength({ max: 50 })
    .withMessage("company cannot exceed 50 characters"),
  body("position")
    .notEmpty()
    .withMessage("position is required")
    .isLength({ max: 50 })
    .withMessage("position cannot exceed 50 characters"),
  body("jobLocation")
    .notEmpty()
    .withMessage("job location is required")
    .isLength({ max: 50 })
    .withMessage("job location cannot exceed 100 characters"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid job status"),
  body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invalid job type"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (val, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(val);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");

    const job = await jobModel.findById(val);
    if (!job) throw new NotFoundError(`no job with id ${val}`);

    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("not authorized to access this content");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 10 })
    .withMessage("name cannot exceed 10 characters"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await UserModel.findOne({ email });
      if (user) throw new BadRequestError("email already exist");
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("lastName")
    .notEmpty()
    .withMessage("last name is required")
    .isLength({ max: 10 })
    .withMessage("last name cannot exceed 10 characters"),
  body("location")
    .notEmpty()
    .withMessage("location is required")
    .isLength({ max: 50 })
    .withMessage("location cannot exceed 50 characters"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 10 })
    .withMessage("name cannot exceed 10 characters"),
  ,
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await UserModel.findOne({ email });
      // Check if user exist and then check if it's the same user or not
      if (user && user._id.toString() !== req.user.userId)
        throw new BadRequestError("email already exist");
    }),

  body("lastName")
    .notEmpty()
    .withMessage("last name is required")
    .isLength({ max: 10 })
    .withMessage("last name cannot exceed 10 characters"),
  body("location")
    .notEmpty()
    .withMessage("location is required")
    .isLength({ max: 50 })
    .withMessage("location cannot exceed 50 characters"),
]);
