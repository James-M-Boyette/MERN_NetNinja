import { useState } from "react";

const WorkoutForm = () => {
  // * SCRIPTS
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout), // We need to do this in order to convert our object into a JSON string
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      // Reset the error, in case there was one previously
      setError(null);

      // Reset input fields to blank, so that adding more workouts is easier
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added", json);
    }
  };

  // * TEMPLATE
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout:</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      {/* Note: 
      - `onChange` is React's directive/hook that will "do some work" when there is a change 
      - `value` is React's two-way databinding directive (so as 'title' changes, so will this field and vice-versa)
      */}
      <label>Excersize Load:</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Excersize Reps:</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
