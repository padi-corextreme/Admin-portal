import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    companyName: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/account', formData);
      console.log(response.data);
      // Optionally, handle success (redirect, show message, etc.)
    } catch (error) {
      console.error('Account creation failed:', error);
      // Optionally, handle error (display error message, etc.)
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center dark:bg-white-900 min-w-screen min-h-screen">
      <div className="grid gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-[#F67F17] rounded-[26px] m-4">
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-8 lg:p-4 md:p-8 sm:p-2 m-2">
            <h1 className="pt-4 pb-6 font-bold text-3xl dark:text-gray-400 text-center cursor-default">
              Create an Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="mb-2 dark:text-gray-400 text-sm">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 dark:text-gray-400 text-sm">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-sm">Email</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-sm">Password</label>
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="mb-2 dark:text-gray-400 text-sm">Country</label>
                <input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Country"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="mb-2 dark:text-gray-400 text-sm">Company Name</label>
                <input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="mb-2 dark:text-gray-400 text-sm">Contact</label>
                <input
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Contact"
                  required
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
                  <Link to="/signin" className="group text-blue-400 transition-all duration-100 ease-in-out">
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
