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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Enter Your Email"
                required
              />
              <FaUser className="input-icon mr-40px" />
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
              <FaLock className="input-icon mr-40px" />
            </div>
          </div>

          <div className="form-group">
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

          <p className="terms-condition">Agree to our terms and conditions.</p>
          <button type="button" className="btn btn-secondary">Sign Up</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#" className="register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
