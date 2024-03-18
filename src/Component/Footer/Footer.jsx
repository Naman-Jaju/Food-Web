// import React from 'react'
// import { Link } from 'react-router-dom';
// import { BiRestaurant } from 'react-icons/bi';

// export default function Footer() {
//     return (
//         <footer className="bg-white border-y ">
//             <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
//                 <div className="md:flex md:justify-between">
//                     <div className="mb-6 md:mb-0">
//                         <Link to="/" className="flex items-center">
//                         <span>
//                           <BiRestaurant size={32}/>
//                         </span>
//                               <h1 className="font-semibold text-xl">FoodieWeb</h1> 
//                         </Link>
//                     </div>
//                     <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <Link to="/" className="hover:underline">
//                                         Home
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/menu" className="hover:underline">
//                                         Menu
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <a
//                                         href="https://instagram.com"
//                                         className="hover:underline"
//                                         target="_blank"
//                                         rel="noreferrer"
//                                     >
//                                         Instagram
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <Link to="/" className="hover:underline">
//                                         Twitter
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <Link to="#" className="hover:underline">
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to="#" className="hover:underline">
//                                         Terms &amp; Conditions
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <span className="text-sm text-gray-500 sm:text-center">
//                         © 2023
//                         . All Rights Reserved.
//                     </span>
                    
//                 </div>
//             </div>
//         </footer>
//     );
// }
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +1 234 567 890</span>
            <span><i className="fas fa-envelope"></i> info@example.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Mobile Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;