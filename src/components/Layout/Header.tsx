import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState<boolean | false>(false);

  const services = [
    
    {name: "Depression & Anxiety" , path: "/services/depression-anxiety"},
    {name: "Bipolar Depression", path: "/services/bipolar-disorder"}, 
    {name: "Epilepsy", path:"/services/epilepsy"},
    {name: "Addiction", path: "/services/addiction-disorders"}, 
    {name: "OCD, PTSD & ADHD", path: "/services/ocd-ptsd-adhd"}, 
    {name: "Sleep & Sexual Health", path: "/services/sleep-sexual-health"},
    {name: "Relationship Counseling", path: "/services/relationship-counseling"}, 
    {name: "Psychotherapy", path: "/services/psychotherapy"}
  ]

  const handleLinkClick = () => {
    setIsServicesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0){
        setIsScrolled(true)
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Dr. Pratik Kumar Logo"
            className="h-10 w-auto mr-3"
          />
        </Link>

        <nav className="text-xl font-bold hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <div className="relative group">
              <button
                className="header-link flex items-center text-2xl text-white hover:text-red-500 transition duration-300"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-white text-sm font-bold hover:text-red-500"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center">
          <FaPhone className="text-white mr-2" />
          <span className='text-white font-bold cursor-pointer' onClick={()=> {window.location.href = 'tel:9023997854'}}>+91 9023997854</span>
      </div>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>

      {
    isMenuOpen && (
      <div className="md:hidden bg-primary">
        <nav className="flex flex-col ">
          <NavLink to="/" mobile onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" mobile onClick={toggleMenu}>About</NavLink>
          <NavLink to="/services" mobile onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/blog" mobile onClick={toggleMenu}>Blog</NavLink>
          <NavLink to="/contact" mobile onClick={toggleMenu}>Contact</NavLink>
        </nav>
        <div className="flex items-center justify-center px-4 py-4 border border-solid border-red-600">
          <FaPhone className="text-white mr-2" />
          <span className="text-white font-bold cursor-pointer" onClick={() => { window.location.href = 'tel:9023997854' }}>+91 9023997854</span>          </div>
      </div>
    )
  }
    </header >
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
      ? 'block py-4 px-6 text-white font-bold text-2xl hover:bg-secondary transition duration-300 mt-4'
      : 'text-white text-2xl font-bold  hover:text-secondary transition duration-300'
      }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;