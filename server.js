import express from "express";
import * as dotenv from "dotenv";
dotenv.config(); // To access .env variables
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";

// routes
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middleware
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import { authenticatedUser } from "./middleware/authMiddleware.js";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Recreate __dirname because it is not available by default in ES Modules (import/export)
const __dirname = dirname(fileURLToPath(import.meta.url));

// 1. Helmets & Middlewares الأمان أولاً
// Fix CSP error in production: Allow images from Cloudinary and local blob previews
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "data:", "https://res.cloudinary.com", "blob:"],
      },
    },
  }),
);
// Condition to log only in development
if (process.env.NODE_ENV === "development") {
  // This package to log info about `our request that happened
  app.use(morgan("dev"));
}

app.use(cookieParser());
// Middleware to parse JSON bodies
app.use(express.json());

// 2. Health check route
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// 3. Serve Static Files (Frontend Build)
// Serve production-ready static files (HTML, CSS, JS, images) from the React build folder
app.use(express.static(path.resolve(__dirname, "./client/dist")));

// 4. API Routes
app.use("/api/v1/jobs", authenticatedUser, jobRouter);
app.use("/api/v1/users", authenticatedUser, userRouter);
app.use("/api/v1/auth", authRouter);

// 5. Catch-all route for React Client Routing (Excluding /api routes)
// // Catch-all route: Redirect all requests to index.html so React Router can handle client-side routing without 404 errors
// app.get("/{*splat}", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
// });

// 6. Catch-all for 404 (Unknown API endpoints)
// // middleware to catch-all requests that doesn't match with the routes above
// // standard way to handle 404 ERROR
// app.use("/{*splat}", (req, res) => {
//   res.status(404).json({ msg: "not found" });
// });

// 5. Catch-all route for React Client Routing (Excluding /api routes)
// Catch-all routes for React SPA (excludes API requests)
app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) {
    return next(); // يمرره لـ middleware الـ 404 بالأسفل
  }
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
// 6. Catch-all for 404 (Unknown API endpoints)
// 404 handler for unmatched routes (especially API)
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// 7. Global Error Handler
// TRIGGERED BY OUR EXISTING ROUTES IF THERE IS A VALID REQUEST AND HAS AN ERROR
app.use(errorHandlerMiddleware);

/**
 * ========================
 * Start Server
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
