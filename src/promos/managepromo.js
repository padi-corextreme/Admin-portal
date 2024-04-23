import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ManagePromo() {
  const [promotions, setPromotions] = useState([]);

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
      setPromotions(promotions.filter(promotion => promotion._id !== id));
    } catch (error) {
      console.error('Error deleting promotion:', error);
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
              <td className="px-6 py-4 whitespace-nowrap">{promotion.originalPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap">{promotion.discountPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{promotion.categories}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => deletePromotion(promotion._id)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
