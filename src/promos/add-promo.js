import React, { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import padi from "../assets/padi.jpeg";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const AddPromo = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    discountType: '',
    discountAmount: '',
    categories: '',
  });

  const [userInfo] = useState(JSON.parse(sessionStorage.getItem('USER_INFO')))

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleLogout = () => {
    // Clear user session information
    sessionStorage.removeItem('USER_INFO');
    // Redirect the user to the sign-in page
    window.location.href = '/';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const userInfo = JSON.parse(sessionStorage.getItem('USER_INFO'));

      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('image', formData.image);
      formDataToSubmit.append('discountType', formData.discountType);
      formDataToSubmit.append('discountAmount', formData.discountAmount);
      formDataToSubmit.append('categories', formData.categories);
      formDataToSubmit.append('createdBy', userInfo._id);

      const response = await axios.post('http://localhost:7000/api/admin/promotions', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        console.log('Promotion added successfully');
        setSuccessMessage('Promotion added successfully.');
        setFormData({
          title: '',
          description: '',
          image: null,
          discountType: '',
          discountAmount: '',
          categories: '',
        });
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error adding promotion:', error);
      setErrorMessage('Failed to add promotion. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <div>
        <section className="flex bg-gray-100 min-h-screen">
          <aside className="hidden sm:flex sm:flex-col">
            <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF]">
              <img src={padi}></img>

            </a>
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-[#0C172C]">
              <nav className="flex flex-col mx-4 my-6 space-y-4">
                <a href="/allpromos" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span className="sr-only">Folders</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </a>
                <a href="/dashboard" className="inline-flex items-center justify-center py-3 text-[#007AFF] bg-white rounded-lg">
                  <span className="sr-only">Dashboard</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </a>
                <a href="/addpromos" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span className="sr-only">Messages</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </a>
                <a href="/managepromos" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span className="sr-only">manage promos</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </a>
              </nav>
              <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span className="sr-only">Settings</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>
          <div className="flex-grow text-gray-800 ">
            <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
              <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                <span className="sr-only">Menu</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>

              <div className="flex flex-shrink-0 items-center ml-auto">
                <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                  <span className="sr-only">User Menu</span>
                  <div className="hidden md:flex md:flex-col md:items-end md:leading-tight mr-2">
                    <span className="font-semibold"></span>
                    <span className="text-sm text-gray-600">{userInfo.firstName}</span>
                  </div>
                  <span>|</span>
                  <div className="hidden md:flex md:flex-col md:items-end md:leading-tight ml-2">
                    <span className="font-semibold"></span>
                    <span className="text-sm font-bold text-gray-600">{userInfo.companyName}</span>
                  </div>
                  <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                    <Avatar name={`${userInfo.firstName} ${userInfo.lastName}`} size="50" />
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div className="border-l pl-3 ml-3 space-x-1">
                  <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                    <span className="sr-only">Notifications</span>
                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <button
                    className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
                    onClick={handleLogout}
                  >
                    <span className="sr-only">Log out</span>
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
            <div className="flex flex-col p-6 sm:p-10 space-y-6 space-y-6 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6">
                  <h1 className="text-4xl font-semibold mb-2">Padi Admin Portal</h1>
               
                </div>
                <div className="flex flex-wrap items-start justify-end -mb-3">
                  <button className="inline-flex px-5 py-3 text-[#F67F17] hover:text-orange-700 focus:text-[#F67F17]  focus:bg-purple-100 border border-[#F67F17] rounded-md mb-3">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <Link to="/managepromos">Manage Promos</Link>
                  </button>
                  <button className="inline-flex px-5 py-3 text-white bg-[#007AFF] hover:bg-blue-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <Link to="/addpromos">Add New Promo</Link>
                  </button>
                </div>
              </div>
              
                  
                
                
                 <section id='addnewpromo'>
      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border-8 border-blue-700
       rounded-[26px] m-4 p-8 bg-white">
        <div className="text-center p-10">
          <h1 className="font-semibold text-4xl mb-4">Add New Promotion</h1>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="text-sm leading-7 text-gray-600">Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="text-sm leading-7 text-gray-600">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
            </div>
            {/* Image */}
            <div className="mb-4">
              <label htmlFor="image" className="text-sm leading-7 text-gray-600">Image</label>
              <input type="file" id="image" name="image" onChange={handleImageChange} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            {/* Discount Type */}
            <div className="mb-4">
              <label htmlFor="discountType" className="text-sm leading-7 text-gray-600">Original Price</label>
              <input type="text" id="discountType" name="discountType" value={formData.discountType} onChange={handleChange} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            {/* Discount Amount */}
            <div className="mb-4">
              <label htmlFor="discountAmount" className="text-sm leading-7 text-gray-600">Discount Price</label>
              <input type="number" id="discountAmount" name="discountAmount" value={formData.discountPrice} onChange={handleChange} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
            </div>
            {/* Categories */}
            <div className="mb-4">
              <label htmlFor="categories" className="text-sm leading-7 text-gray-600">Categories</label>
              <select id="categories" name="categories" value={formData.categories} onChange={handleChange} className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                <option value="">Select category...</option>
                <option value="clothing">Clothing</option>
                <option value="home appliances">Home Appliances</option>
                <option value="fashion">Fashion</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
              </select>
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-center mt-4">
              <button type="submit" className="hover:shadow-form w-full rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add New Promotion
              </button>
            </div>
            {/* Success and Error Messages */}
            <div className="flex items-center justify-center mt-2">
              {successMessage && (
                <div className="flex items-center mr-4">
                  <FaCheckCircle className="text-green-600 mr-2" /> {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="flex items-center">
                  <FaExclamationCircle className="text-red-600 mr-2" /> {errorMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section> 
          
      </div>
      </section>
    </div>
    </div>
  );
};

export default AddPromo;
