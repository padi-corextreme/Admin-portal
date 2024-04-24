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
        const response = await axios.get('http://localhost:7000/api/admin/promotions');
        setPromotions(response.data);
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    }

    fetchPromotions();
  }, []);

  const deletePromotion = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/admin/promotions/${id}`);
      setPromotions(promotions.map(promotion => {
        if (promotion._id === id) {
          setTimeout(() => {
            setPromotions(promotions.filter(p => p._id !== id));
          }, 500);
          return { ...promotion, success: true, error: false };
        }
        return promotion;
      }));
    } catch (error) {
      console.error('Error deleting promotion:', error);
      setPromotions(promotions.map(promotion => {
        if (promotion._id === id) {
          setTimeout(() => {
            setPromotions(promotions.filter(p => p._id !== id));
          }, 500);
          return { ...promotion, success: false, error: true };
        }
        return promotion;
      }));
    }
  };

  return (
    <section id='managepromos'>
      <div className="text-center p-10">
        <h1 className="font-semibold text-4xl mb-4">Manage Promotion</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount Price</th>
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
  );
}
