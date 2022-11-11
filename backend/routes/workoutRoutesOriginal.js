import express from "express";
import Workout from "../models/workoutModel.js";

const workoutsRouter = express.Router();

/**
** This is our original 'route' file. 
   - It has very little logic in the routes, but you can see that if we continued to write as much as we did in our POST route, this file would get big and hard to read
   - The solution was to create a new folder and file for controllers, and then extract much of the logic out (review the `workoutRouter.js` and `workoutController.js` to see how this file was split-up)
*/

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
workoutsRouter.post("/", async (req, res) => {
  // ** Here's our second response, which includes much more logic ...
  // ** Better to extract it out and insert our controller as the second argument ...
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
  // ** Here's our first response
  // res.json({
  //   msg: `POST a single workout`,
  // });
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
