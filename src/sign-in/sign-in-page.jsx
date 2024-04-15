import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import './sign-in.css';

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Enter Your Email"
                required/>
                <FaUser />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
                required
              />
               <FaLock />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                className="remember-checkbox"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary">Sign in</button>

          <p className="terms">Agree to our terms and conditions.</p>
          <button type="button" className="btn btn-secondary">Sign Up</button>

          <div className="flex items-center mt-4">
            <span className="sign-in-with">Sign in with:</span>
            <div className="flex space-x-2">
              <button className="social-btn">
                <img className="social-icon" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"/>
              </button>
              <button className="social-btn">
                <img className="social-icon" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
              </button>
              <button className="social-btn">
                <img className="social-icon" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
              alt="twitter" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;