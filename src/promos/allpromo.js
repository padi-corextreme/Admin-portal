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
      <div className="text-center p-10">
        <h1 className="font-semibold text-4xl mb-4">All Promotions</h1>
      </div>
  
      <section id="promos" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {promotions.map((promotion) => (
          <ProductCard
            key={promotion._id}
            imageUrl={`https://savefiles.org/${promotion.image}?shareable_link=204`}
            title={promotion.title}
            description={promotion.description}
            discountType={promotion.discountType}
            discountAmount={promotion.discountAmount}
          />
        ))}
      </section>
    </div>
  );
};

export default AllPromo;
