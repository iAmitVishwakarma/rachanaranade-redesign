import { Instagram, Linkedin, Locate, Mail, MapPinHouse, Phone, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
const icons = [
  { icon:  faYoutube, link: "https://www.youtube.com/@RachanaRanade" },
  { icon: faLinkedinIn, link: "https://www.linkedin.com/in/rachana-ranade/" },
  { icon: faInstagram, link: "https://www.instagram.com/rachana.ranade/" },
  { icon: faFacebookF, link: "https://www.facebook.com/rachana.ranade" },
  { icon:  faTwitter, link: "https://twitter.com/ranade_rachana" },
];

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-4 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid pb-10 grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1 ">
          <h2 className="text-xl font-bold mb-4 "> <b className="text-white bg-primary px-2 py-2 rounded-full ">RR<i className="text-accent">.</i></b> CA Rachana Ranade</h2>
          <p className="text-sm text-gray-400 font-inter pr-5">
           Simplifying finance education for everyone in
India.   Learn stock market, mutual funds, and
personal finance in simple Hindi.
          </p>
         
            <div className=" flex items-center gap-4 mt-5">
              {icons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors shadow p-1 shadow-gray-500 rounded-full "
                >
                  <FontAwesomeIcon icon={icon.icon} size="lg " />
                </Link>
              ))}
              </div>
       </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/courses" className="text-gray-400 hover:text-white">
                Basics of Stock Market
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-400 hover:text-white">
                Mutual Funds
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-400 hover:text-white">
                Fundamental Analysis
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-400 hover:text-white">
                View All
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/membership" className="text-gray-400 hover:text-white">
                Membership
              </Link>
            </li>
          </ul>
        </div>

      
        

        {/* Contact */}


<div>
  <h3 className="font-semibold mb-3">Contact</h3>
  <ul className="space-y-2 text-sm text-gray-400 hover:text-white">
    <li>
      <Link to="mailto:Support@CArachnaranade.com" className="hover:text-white">
        <Mail className="inline mr-1" size={16} /> Support@CArachnaranade.com
      </Link>
    </li>
    <li>
      <Link to="tel:+911234567890" className="hover:text-white">
        <Phone className="inline mr-1" size={16} /> +91 1234567890
      </Link>
    </li>
    <li>
      <Link to="#" className="hover:text-white">
        <MapPinHouse className="inline mr-1" size={16} /> Pune, Maharashtra
       
      </Link>
    </li>
  </ul>
</div>

      </div>
<div className="flex items-baseline justify-around  mt-5 pt-4 border-t border-gray-700 ">
<div className="text-center text-xs text-gray-500 ">
        © {new Date().getFullYear()} CA Rachana Ranade. All r ights reserved.
      </div>
   
          <ul className="space-y-2 text-sm flex gap-5">
            <li>
              <Link to="#" className="text-gray-400 hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-400 hover:text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
       
</div>
      
    </footer>
  );
};

export default Footer;
