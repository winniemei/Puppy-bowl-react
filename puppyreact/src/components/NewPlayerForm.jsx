import { useState } from "react";

export default function NewPlayerForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {method: "POST",}) ;
        const result = await response.json();
        console.log(result);
        setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      { !(username.length >= 8) && <p style={{color: 'red'}}>
            Username must be at least 8 characters
        </p>
      }
    </>
  );
}