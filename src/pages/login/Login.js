
import React from 'react';
import './Login.css'; // Import the Login.css file for styling
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
       <Link to="/register"> <p>Don't have an account? <a href="/register">Register here</a></p></Link>
      </form>
    </div>
  );
}

export default Login;