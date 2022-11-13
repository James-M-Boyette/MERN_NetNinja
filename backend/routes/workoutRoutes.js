import express from "express";
import {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const workoutsRouter = express.Router();

// GET all workouts
workoutsRouter.get("/", getWorkouts);

// GET a single workout
workoutsRouter.get("/:id", getWorkout);

// POST a single workout
workoutsRouter.post("/", createWorkout);

// UPDATE a single workout
workoutsRouter.patch("/:id", updateWorkout);

// DELETE a single workout
workoutsRouter.delete("/:id", deleteWorkout);

export default workoutsRouter;
