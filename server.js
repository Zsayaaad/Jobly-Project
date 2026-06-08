import express from "express";
import * as dotenv from "dotenv";
dotenv.config(); // To access .env variables
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// routes
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

// middleware
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import { authenticatedUser } from "./middleware/authMiddleware.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));

// Condition to log only in development
if (process.env.NODE_ENV === "development") {
  // This package to log info about `our request that happened
  app.use(morgan("dev"));
}

app.use(cookieParser());
// Middleware to parse JSON bodies
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", authenticatedUser, jobRouter);
app.use("/api/v1/users", authenticatedUser, userRouter);
app.use("/api/v1/auth", authRouter);

// middleware to catch-all requests that doesn't match with the routes above
// standard way to handle 404 ERROR
app.use((req, res) => {
  res.status(404).json({ msg: "not found" });
});

// TRIGGERED BY OUR EXISTING ROUTES IF THERE IS A VALID REQUEST AND HAS AN ERROR
app.use(errorHandlerMiddleware);

/**
 * ========================
 * ========================
 */
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
