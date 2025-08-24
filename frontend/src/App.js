//Landing page for Task-App: User login page
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import "./App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Temp user name and password
    const tempUserName = "user";
    const tempPassword = "password";
    e.preventDefault();
    // Handle temp login logic, push to dashboard page if sucessful
    if(username === tempUserName && password === tempPassword){
      navigate("/dashboard");
    }
  };

  return (
    <div className="app-container">
      <div className="app-bg">
        <div className="login-card">
          <h2>Task-App Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                autoFocus
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div className="rightSide-box"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
