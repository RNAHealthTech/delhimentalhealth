import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Map from '../map';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
              </div>
              <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="flex items-center mb-4">
                <FaPhone className="text-primary mr-2" />
                <span>9023997854 / 9877065403</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-primary mr-2" />
                <span>docpratikkumar@gmail.com</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mr-2 mt-1" />
                <span>S-666, Sai Bhawan, 3rd floor, School Block, Shakarpur, New Delhi-110092</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="aspect-w-16 aspect-h-9">
               <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;