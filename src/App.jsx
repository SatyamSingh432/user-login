import "./App.css";
import { useState } from "react";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const user = "user";
  const password = "password";
  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === user && pass === password) {
      setShowLogin(true);
      setInvalid(false);
    } else {
      setInvalid(true);
      setName("");
      setPass("");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {invalid && <p>Invalid username or password</p>}
      {!showLogin ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            placeholder="username"
            required
            value={name}
            onChange={handleName}
          />{" "}
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="username"
            required
            value={pass}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}

export default App;
