import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await UserModel.countDocuments()) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const { name, email, password, lastName, location } = req.body;

  const hashedPassword = await hashPassword(password);

  await UserModel.create({
    name,
    email,
    password: hashedPassword,
    lastName,
    location,
    role: role,
  });
  res.status(StatusCodes.CREATED).json({ msg: "user created successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  const isValidUser = user && (await comparePassword(password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });

  res.cookie("token", token, {
    httpOnly: true, // CRITICAL: Prevents client-side JS from reading the cookie
    secure: process.env.NODE_ENV === "production", // Ensures cookie only sent over HTTPS only in production
    sameSite: "strict", // Protects against CSRF
    maxAge: 1000 * 60 * 60 * 24, // 1 day in ms
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
