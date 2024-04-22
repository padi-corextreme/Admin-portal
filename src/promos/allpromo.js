import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './productcard';

const AllPromo = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      const response = await axios.get('/api/admin/promotions');
      setPromotions(response.data);
      
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  };

  const handlePromotionAdded = () => {
    // After a new promotion is added, refresh the list of promotions
    fetchPromotions();
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
            imageUrl={promotion.image}
            title={promotion.title}
            description={promotion.description}
            discountAmount={promotion.discountAmount}
          />
        ))}
      </section>
    </div>
  );
};
export default AllPromo;
