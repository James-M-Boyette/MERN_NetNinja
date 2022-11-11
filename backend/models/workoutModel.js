import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      // title of the exercise
      type: String,
      required: true,
    },
    load: {
      // how heavy should the weight be
      type: Number,
      required: true,
    },
    reps: {
      // how many reps were completed of the excersize
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // auto-create timestamps for us
);

export default mongoose.model("Workout", workoutSchema); // First argument will create a "Workout" collection, and the second applies the specified schema
