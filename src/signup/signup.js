import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    country: '',
    contact: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage(''); // Clear any previous error messages
      const response = await axios.post('http://localhost:7000/account', formData);
      console.log(response.data);
      // Redirect the user to the dashboard or any other appropriate page upon successful signup
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Signup failed:', error);
      if (error.response && error.response.status === 400) {
        setErrorMessage('Invalid data. Please check your inputs.');
      } else if (error.response && error.response.status === 409) {
        setErrorMessage('Email already exists. Please use a different email.');
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
              Create an Account
            </h1>
            {errorMessage && (
              <div className="text-red-500 mb-4 text-center">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="mb-2 dark:text-gray-400 text-sm">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 dark:text-gray-400 text-sm">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-sm">Email</label>
                <input
                  id="email"
                  name="email"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-sm">Password</label>
                <input
                  id="password"
                  name="password"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="mb-2 dark:text-gray-400 text-sm">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="mb-2 dark:text-gray-400 text-sm">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="mb-2 dark:text-gray-400 text-sm">Country</label>
                <input
                  id="country"
                  name="country"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="mb-2 dark:text-gray-400 text-sm">Contact</label>
                <input
                  id="contact"
                  name="contact"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-[#F67F17] shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-[#F67F17] hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Already have an account?{' '}
                  <Link to="/" className="group text-blue-400 transition-all duration-100 ease-in-out">
                    <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Sign In
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

export default Signup;

