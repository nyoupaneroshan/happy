import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="White Happydent"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Committed to bringing you the best dental care products for a brighter smile and healthier teeth.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/whitehappydent" className="text-gray-400 hover:text-primary-500 transition">
                <FacebookIcon size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-primary-500 transition">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/white_happydent_toothpaste/" className="text-gray-400 hover:text-primary-500 transition">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-primary-500 transition">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-500 transition">Products</Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-500 transition">Blog</Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Lokanthali-1, Bhaktapur<br />
                  Bagmati, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">(+977) 985-1069197</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@whitehappydent.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates, tips, and special offers.
            </p>
            <form className="flex flex-col space-y-3 mb-6"> {/* Added mb-6 for spacing */}
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
            {/* Modern Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/whitehappydent" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition">
                <FacebookIcon size={24} /> {/* Increased icon size for better visibility */}
              </a>
              {/* <a href="https://twitter.com/whitehappydent" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition">
                <Twitter size={24} />
              </a> */}
              <a href="https://www.instagram.com/white_happydent_toothpaste/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition">
                <Instagram size={24} />
              </a>
              {/* <a href="https://www.youtube.com/channel/YOUR_YOUTUBE_CHANNEL_ID" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition">
                <Youtube size={24} />
              </a> */}
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} <a href='https://11techmedia.com.np' target='_' className='text-primary-500 hover:text-primary-600 transition'>White Happydent</a>. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacypolicy" className="text-gray-400 hover:text-primary-500 text-sm">Privacy Policy</a>
            <a href="/termsofservice" className="text-gray-400 hover:text-primary-500 text-sm">Terms of Service</a>
            <a href="/cookiepolicy" className="text-gray-400 hover:text-primary-500 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;