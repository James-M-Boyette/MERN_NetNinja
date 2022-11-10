import express from "express";

const workoutsRouter = express.Router();

// GET all workouts
workoutsRouter.get("/", (req, res) => {
  res.json({
    msg: `GET all workouts ...`,
  });
});

// GET a single workout
workoutsRouter.get("/:id", (req, res) => {
  res.json({
    msg: `GET a single workout`,
  });
});

// POST a single workout
workoutsRouter.post("/", (req, res) => {
  res.json({
    msg: `POST a single workout`,
  });
});

// UPDATE a single workout
workoutsRouter.patch("/:id", (req, res) => {
  res.json({
    msg: `UPDATE a single workout`,
  });
});

// DELETE a single workout
workoutsRouter.delete("/:id", (req, res) => {
  res.json({
    msg: `DELETE a single workout`,
  });
});

export default workoutsRouter;
