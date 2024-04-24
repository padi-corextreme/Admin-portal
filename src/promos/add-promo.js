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
            formDataToSubmit.append('originalPrice', formData.discountType);
            formDataToSubmit.append('discountPrice', formData.discountAmount);
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
        <section id='addnewpromo'>
            <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-[26px] m-4 bg-white p-8">
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
    );
};

export default AddPromo;
