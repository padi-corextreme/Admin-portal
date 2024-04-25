import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import padi from "../assets/padi.jpeg";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

export default function ManagePromo() {
  const [promotions, setPromotions] = useState([]);
  const [userInfo] = useState(JSON.parse(sessionStorage.getItem('USER_INFO')))
  const handleLogout = () => {
    // Clear user session information
    sessionStorage.removeItem('USER_INFO');
    // Redirect the user to the sign-in page
    window.location.href = '/';
  };

  useEffect(() => {
    async function fetchPromotions() {
      try {
        const response = await axios.get(`http://localhost:7000/api/admin/promotions?userId=${userInfo.id}`);
        setPromotions(response.data);
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    }

    fetchPromotions();
  }, [userInfo.id]);

  const deletePromotion = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/admin/promotions/${id}`);
      setPromotions(promotions.filter(promotion => promotion._id !== id));
    } catch (error) {
      console.error('Error deleting promotion:', error);
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
              
                  
             
             <section id='managepromos'>
      <div className="text-center p-10">
        <h1 className="font-semibold text-4xl mb-4">Manage Promotion</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {promotions.map(promotion => (
            <tr key={promotion._id} className="transition-all duration-300 hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{promotion.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{promotion.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{promotion.discountType}</td>
              <td className="px-6 py-4 whitespace-nowrap">{promotion.discountAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{promotion.categories}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => deletePromotion(promotion._id)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                {promotion.success && (
                  <div className="flex items-center">
                    <FaCheckCircle className="ml-2 text-green-500" />
                    <span className="ml-1 text-green-500">Success</span>
                  </div>
                )}
                {promotion.error && (
                  <div className="flex items-center">
                    <FaTimesCircle className="ml-2 text-red-500" />
                    <span className="ml-1 text-red-500">Failed</span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>    
              
          
      </div>
      </section>
    </div>
    </div>
  );
}
