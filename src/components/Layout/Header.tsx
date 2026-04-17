import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import Banner from './banner';
import AppointmentModal from '../AppointmentModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();


  const services = [
    { name: "Depression & Anxiety", path: "/services/depression-anxiety" },
    { name: "Bipolar Disorder", path: "/services/bipolar-disorder" },
    { name: "Addiction", path: "/services/addiction-disorders" },
    { name: "OCD, PTSD & ADHD", path: "/services/ocd-ptsd-adhd" },
    { name: "Dementia / Memory Loss", path: "/services/dementia" },
    { name: "Schizophrenia / Anger Issues", path: "/services/schizophrenia" },
    { name: "Sleep & Sexual Health", path: "/services/sleep-sexual-health" },
    { name: "Relationship Counseling", path: "/services/relationship-counseling" },
    { name: "Psychotherapy", path: "/services/psychotherapy" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {  // mobile view
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    } else {
      navigate('/services');
    }
  };



  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
        
        <div className="bg-gradient-to-l from-teal-800 to-teal-600 p-2 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-12">
          <button className="w-full sm:w-auto bg-teal-800 text-white px-4 py-2 border border-solid rounded" onClick={openModal}>Schedule An Appointment</button>
          <button className="w-full sm:w-auto bg-teal-800 text-white px-4 py-2 border border-solid rounded" onClick={() => window.location.href = 'tel:9934035397'}>Call : +91 99340 35397</button>
        </div>

        <Banner />

        <nav className="sticky bg-white border-b border-teal-200 w-full"> {/* Added w-full to ensure full width */}
          <div className="container mx-auto px-4 w-full">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="Dr. Pratik Kumar Logo"
                  className="h-12 w-auto mr-3"
                />
              </Link>

              <div className="hidden md:flex space-x-6 text-teal-600 items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <div className="relative group">
                  <Link
                    to="/services"
                    className="flex font-bold items-center hover:text-teal-800 transition duration-300"
                    onClick={handleServicesClick}
                  >
                    Services
                    <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-teal-600 text-sm hover:bg-teal-50 hover:text-teal-800"
                          role="menuitem"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/check-your-anxiety">Check Anxiety</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>

              <div className="hidden md:flex items-center">
                <FaPhone className="text-teal-600 mr-2" />
                <span className='text-teal-600 font-bold cursor-pointer' onClick={() => { window.location.href = 'tel:9934035397' }}>+91 99340 35397</span>
              </div>

              <button
                className="md:hidden text-teal-600 focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white w-full">
            <nav className="flex flex-col w-full">
              <NavLink to="/" mobile onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/about" mobile onClick={toggleMenu}>About</NavLink>
              <NavLink to="/services" mobile onClick={toggleMenu}>Services</NavLink>
              <NavLink to="/blog" mobile onClick={toggleMenu}>Blog</NavLink>
              <NavLink to="/check-your-anxiety" mobile onClick={toggleMenu}>Check Anxiety</NavLink>
              <NavLink to="/contact" mobile onClick={toggleMenu}>Contact</NavLink>
            </nav>
            <div className="flex items-center justify-center px-4 py-4 border-t border-teal-200">
              <FaPhone className="text-teal-600 mr-2" />
              <span className="text-teal-600 font-bold cursor-pointer" onClick={() => { window.location.href = 'tel:9934035397' }}>+91 99340 35397</span>
            </div>
          </div>
        )}
      </header>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, mobile, onClick }) => (
  <Link
    to={to}
    className={`${mobile
      ? 'block py-4 px-6 text-teal-600 font-bold text-lg hover:bg-teal-50 transition duration-300'
      : 'text-teal-600 font-bold hover:text-teal-800 transition duration-300'
      }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;