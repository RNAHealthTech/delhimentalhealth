import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const siteMetadata = {
  linkedin: "https://www.linkedin.com/in/dr-pratik-kumar",
  facebook: "https://www.facebook.com/drpratikkumar",
  twitter: "https://twitter.com/drpratikkumar",
  phone: "+91-7827990913, 9023997854 ",
  email: "docpratikkumar@gmail.com",
  address: " Ever Bake Market, Shop No. F1, First Floor, BN Block, Local Shopping Centre, West Shalimar Bagh, New Delhi-88",
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="hover:underline transition-all duration-300 text-gray-300 hover:text-white">
    {children}
  </Link>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-l from-teal-800 to-teal-600 text-white rounded-t-3xl shadow-2xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Column 1: About */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Dr. Pratik Kumar</h3>
            <h4 className="text-md">Delhi Global Mind Clinic</h4>
            <p className="text-sm text-gray-300 mt-4 mb-6 max-w-xs">
              Experienced psychiatrist providing compassionate care and comprehensive mental health services.
            </p>
          </div>

          {/* Wrapper for Quick Links, Services, and Contact Us */}
          <div className="w-full md:w-3/4 flex flex-col md:flex-row">
            {/* Column 2: Quick Links */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><FooterLink to="/">Home</FooterLink></li>
                <li><FooterLink to="/services">Services</FooterLink></li>
                <li><FooterLink to="/about">About</FooterLink></li>
                <li><FooterLink to="/contact">Contact</FooterLink></li>
                <li><FooterLink to="/blog">Blog</FooterLink></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><FooterLink to="/services/">Psychiatric Consultation</FooterLink></li>
                <li><FooterLink to="/services/psychotherapy">Psychotherapy</FooterLink></li>
                <li><FooterLink to="/services/relationship-counseling">Relationship Counseling</FooterLink></li>
                <li><FooterLink to="/services/ocd-ptsd-adhd">Trauma Healing</FooterLink></li>
                <li>Call for Home Visits<FooterLink to="tel:9934035397">: 7827990913 / 9023997854</FooterLink></li>
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <FaPhone className="h-5 w-5" />
                  <span className="text-sm text-gray-300">{siteMetadata.phone}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaEnvelope className="h-5 w-5" />
                  <span className="text-sm text-gray-300">{siteMetadata.email}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="h-5 w-5" />
                  <span className="text-sm text-gray-300">{siteMetadata.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Dr. Pratik Kumar. All rights reserved.</p>
          <p className="text-sm text-gray-300">
            DNB Psychiatrist | Mental Health Expert
          </p>
          <p className='text-sm'>
          Website by <a href="https://rnahealthtech.com" className="text-white-800 hover:underline">RNA HealthTech</a>
               
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;