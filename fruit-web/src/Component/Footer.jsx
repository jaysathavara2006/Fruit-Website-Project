import React from "react";
import './Footer.css';
import { FaLeaf } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container7">
      <div className="nav-logo">
        <p className="logo-1">Fruit</p>
        <p className="logo-2">Store</p>
        <FaLeaf className="leaf" />
      </div>

      <div className="f-icon">
      <FaInstagram />
      <FaFacebook />
      <FaYoutube />
      <FaTwitter />
      </div>
    </div>
  );
};

export default Footer;
