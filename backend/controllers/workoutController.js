import Workout from "../models/workoutModel.js";

// get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 }); // could search for specific things like `reps: 20`
    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// get a single workout

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add document to DB
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
};

// delete a workout

// update a workout

export { createWorkout, getWorkouts };
