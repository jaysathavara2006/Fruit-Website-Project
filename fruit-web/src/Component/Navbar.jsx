import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io"; 
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Ourmenu from './Ourmenu';
import Brandinfo from './Brandinfo';
import Onlinestore from './Onlinestore';
import Freshfruit from './Freshfruit';
import Footer from './Footer';
import './Navbar.css';

const Navbar = ({cartallpr}) => {
  const [menuopen,setMenuopen]=useState(false)
  return (
    <main>
    <nav>

        <div className='container'>

            <div className='nav-logo'>
                <p className='logo-1'>Fruit</p>
                <p className='logo-2'>Store</p>
                <FaLeaf className='leaf'/>
            </div>

        
            <div className={`nav-iteam ${menuopen ? 'show' : ''}`}>
                <Link to='/hero'>Home</Link>
                <Link to="/our">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart"><FaShoppingCart className='cart-logo'/>
                <span className='cart-ll'>
                  {cartallpr.length}
                </span>
                </Link>
            </div>

            <IoIosMenu className='menu-logo' onClick={() => setMenuopen(!menuopen)} />
          

 


        </div>

       
      
    </nav>


    
    
    </main>
  )
}

export default Navbar
