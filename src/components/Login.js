import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginData from "../data/loginData.json";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === loginData.username && password === loginData.password) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container"><div className="humanimg"></div>
      <form onSubmit={handleLogin}>
        <div className="left">
        <h3 className="sign">Sign in to</h3>
        <h5 className="lorem">Lorem Ipsum is simply</h5>
        <pre>
          if you dont have an account register<br></br>
          You can <a href="">Register here!</a>
        </pre>
        </div>
        <h4 className="signin">Sign in</h4>
        <input className="text1" type="text" placeholder="Enter email or username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="text2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <a href="" className="forgot">Forgot password?</a>
        <button className="login" type="submit">Login</button>
        <p className="or">or continue with</p>
        <img className="app" src="path 15.svg" width={18} height={27}></img>
        
      </form>
    </div>
  );
};

export default Login;
