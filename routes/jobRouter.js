import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);
/**
 * 📌 Golden rule in Express.js:
      Always put the Static Routes (fixed routes defined by clear words like /stats, /search, /profile) before 
      the Dynamic Routes (variable routes containing /:id or /:name).
 */
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .put(checkForTestUser, validateIdParam, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
