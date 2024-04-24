import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './productcard';
import padi from "../assets/padi.jpeg";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const AllPromo = () => {
  const [promotions, setPromotions] = useState([]);
  const [userInfo] = useState(JSON.parse(sessionStorage.getItem('USER_INFO')))

  const handleLogout = () => {
    // Clear user session information
    sessionStorage.removeItem('USER_INFO');
    // Redirect the user to the sign-in page
    window.location.href = '/';
  };

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/admin/promotions');
      setPromotions(response.data);
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  };

  return (
    <div>
      <div>
        <section class="flex bg-gray-100 min-h-screen">
          <aside class="hidden sm:flex sm:flex-col">
            <a href="#" class="inline-flex items-center justify-center h-20 w-20 bg-[#007AFF] hover:bg-[#007AFF] focus:bg-[#007AFF]">
              <img src={padi}></img>

            </a>
            <div class="flex-grow flex flex-col justify-between text-gray-500 bg-[#0C172C]">
              <nav class="flex flex-col mx-4 my-6 space-y-4">
                <a href="/allpromos" class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span class="sr-only">Folders</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </a>
                <a href="/dashboard" class="inline-flex items-center justify-center py-3 text-[#007AFF] bg-white rounded-lg">
                  <span class="sr-only">Dashboard</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </a>
                <a href="/addpromos" class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span class="sr-only">Messages</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </a>
                <a href="/managepromos" class="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span class="sr-only">Manage promos</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </a>
              </nav>
              <div class="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                <button class="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span class="sr-only">Settings</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>
          <div class="flex-grow text-gray-800 ">
            <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
              <button class="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                <span class="sr-only">Menu</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            
              <div class="flex flex-shrink-0 items-center ml-auto">
                <button class="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                  <span class="sr-only">User Menu</span>
                  <div class="hidden md:flex md:flex-col md:items-end md:leading-tight mr-2">
                    <span class="font-semibold"></span>
                    <span class="text-sm text-gray-600">{userInfo.firstName}</span>
                  </div>
                  <span>|</span>
                  <div class="hidden md:flex md:flex-col md:items-end md:leading-tight ml-2">
                    <span class="font-semibold"></span>
                    <span class="text-sm font-bold text-gray-600">{userInfo.companyName}</span>
                  </div>
                  <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                    <Avatar name={`${userInfo.firstName} ${userInfo.lastName}`} size="50" />
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="hidden sm:block h-6 w-6 text-gray-300">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div class="border-l pl-3 ml-3 space-x-1">
                  <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                    <span class="sr-only">Notifications</span>
                    <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                    <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
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
            <div class="flex flex-col p-6 sm:p-10 space-y-6 space-y-6 md:space-y-0 md:flex-row justify-between">
              <div class="mr-6">
                <h1 class="text-4xl font-semibold mb-2">Padi Admin Portal</h1>
               
              </div>
              <div class="flex flex-wrap items-start justify-end -mb-3">
                <button class="inline-flex px-5 py-3 text-[#F67F17] hover:text-orange-700 focus:text-[#F67F17]  focus:bg-purple-100 border border-[#F67F17] rounded-md mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <Link to="/managepromos">Manage Promos</Link>
                </button>
                <button class="inline-flex px-5 py-3 text-white bg-[#007AFF] hover:bg-blue-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <Link to="/addpromos">Add New Promo</Link>
                </button>
              </div>
            </div>
            <div>
              <div className="text-center p-10">
                <h1 className="font-semibold text-4xl mb-4">All Promotions</h1>
              </div>
          
              <section id="promos" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {promotions.map((promotion) => (
                  <ProductCard
                    key={promotion._id}
                    imageUrl={`http://localhost:7000/uploads/images/${promotion.image}`}
                    title={promotion.title}
                    description={promotion.description}
                    originalPrice={promotion.originalPrice}
                    discountPrice={promotion.discountPrice}
                  />
                ))}
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllPromo;
