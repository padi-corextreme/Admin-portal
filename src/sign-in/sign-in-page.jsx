import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage(''); // Clear any previous error messages
      const response = await axios.post('http://localhost:7000/login', {
        // Ensure that the request body is formatted correctly as JSON
        email: email.trim(), // Trim leading and trailing whitespaces
        password: password.trim(), // Trim leading and trailing whitespaces
      });
      console.log(response.data);

      // Redirect the user to the dashboard upon successful login
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Authentication failed. Please check your email and password.');
      } else if (error.response && error.response.status === 404) {
        setErrorMessage('Account not found. Please sign up to create a new account.');
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };


  return (
    <div className="flex font-poppins items-center justify-center dark:bg-white-900 min-w-screen min-h-screen">
      <div className="grid gap-8">
        <div id="back-div" className="bg-gradient-to-r from-blue-500 to-[#F67F17] rounded-[26px] m-4 ">
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-8 lg:p-4 md:p-8 sm:p-2 m-2">
            <h1 className="pt-4 pb-6 font-bold text-3xl dark:text-gray-400 text-center cursor-default">
              Sign In
            </h1>
            {errorMessage && (
              <div className="text-red-500 mb-4 text-center">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-sm">Email</label>
                <input
                  id="email"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-sm">Password</label>
                <input
                  id="password"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-[#F67F17] shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-[#F67F17] hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                SIGN IN
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Don't have an account?{' '}
                  <Link to="/signup" className="group text-blue-400 transition-all duration-100 ease-in-out">
                    <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Sign Up
                    </span>
                  </Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
