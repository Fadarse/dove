import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../custom";
import { Footer } from "../custom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication logic
    if (userName === "admin" && password === "superchefs.admin") {
      navigate("/dashboard");
    }
    else {
      alert("Acces denied!");
    }
    
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>Superchefs (Nigeria)</h1>
        <h2> Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
      <div style={{
        display:"grid",
      }}>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Branch">Branch</Link> 
      </div>
      
    </div>
  );
};

export default Login;
