import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

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
const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ error: "Workout ID is not properly formatted" });
    }

    // const id = await validateID(req, res); // Don't know why this throws the error noted at the bottom of the file ...

    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No such workout found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

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
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ error: "Workout ID is not properly formatted" });
    }

    const deletedWorkout = await Workout.findOneAndDelete({ _id: id }); // Here, we need to look for MongoDB's "_id" key

    if (!deletedWorkout) {
      return res.status(404).json({ error: "No such workout found" });
    }
    res.status(200).json({
      msg: "The following document was deleted ...",
      deletedDocument: deletedWorkout,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ error: "Workout ID is not properly formatted" });
    }

    const updateWorkout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      } // "Spreading" the request's body, here, allows us to use short-hand for
      //    {title: req.body.title, load: req.body.load, reps: req.body.reps,}
    ); // Here, we need to look for MongoDB's "_id" key
    if (!updateWorkout) {
      return res.status(404).json({ error: "No such workout found" });
    }
    res.status(200).json({
      msg: "The following document was updated ...",
      deletedDocument: updateWorkout,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Can't figure out why this code returns "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
// My assumption would be that if the !mongoose validation is triggered, the `return res` would stop the remainder of the controller's logic from being executed and that instead, headers are (attempted to be) sent twice ...
// Seems like the response triggered in this function isn't registered by the calling one ?

const validateID = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Workout ID is not properly formatted" });
  }
  return id;
};

export { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout };
