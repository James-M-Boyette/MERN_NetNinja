import express from "express";
// Setup ENVs ...
import dotenv from "dotenv";
dotenv.config();

// Stores our 'express' app in 'app'
const app = express();

// Middleware
app.use(express.json());
// This will check any request for a body/data, and if one exists, it will attach it to the request object

// Note: our third 'next' argument will be required in order for our app to know to move-on to our `app.get()` and `app.listen()` commands - so it doesn't do anything other than essentially `.then()`
app.use((req, res, next) => {
  console.log("Path:", req.path);
  console.log("Request method =", req.method);
  next();
});

// Routes Handler ...
import healthRoutes from "./routes/healthRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";

// Route Version #1:
// - this is a basic route ...
// - we *could* put alll of our routes directly in this file, but then the file would become overly-long and unreadable. It's better to import routes from a 'routes' folder ...
// app.get("/api/health", (req, res) => {
//   res.json({
//     msg: "Welcome to NetNinja's MERN backend ! \n Everything looks good so far ...",
//   });
// });

// Route Version #2:
// - this would use the routes in a given route file as-is.
// - small problem: it's not clear what our API endpoints are
// app.use(healthRoutes);

// Route Version #3:
// - this is more readable. It *does* mean that we need our routes in a given route file to *not* contain this portion of the url endpoint (so '/api/health' becomes '/' in `healthRoutes.js`), but this is far more readable AND we can always append more to an endpoint in the given route file (if, say, we wanted ".../health/ping" we could write a '/ping/' route in our `healthRoutes.js` file)
app.use("/api/health", healthRoutes); // any request made by the client to '/api/health' endpoint will trigger the '/' route in `healthRoutes.js`

app.use("/api/workouts", workoutRoutes);

// Listen for requests ...
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT} !`);
});
