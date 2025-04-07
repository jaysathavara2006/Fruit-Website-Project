import React, { useState } from 'react'
import './Hero.css';
import fruitplate from '../assets/fruit-plate.png';
import leaf from '../assets/leaf.png';
import { IoBagHandleOutline } from "react-icons/io5";


const Hero = () => {

    
  return (
    <div className="container-2" id='hero'>

        <div className="part1">

            <div className="heading1">
                <p className='cc'>Healthy</p>
                <p className='bb'>Fresh <span className='aa'>Fruits!</span></p>
            </div>

            <div className="heading2">

                <p>Order Now For Fresh Healthy Life</p>

            </div>


            <div className="heading3">

                <p>Healthy and yummy food for morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order.</p>

            </div>

            <div className="heading4">

                <button><span><IoBagHandleOutline className='bag-btn'/></span> Order Now</button>

            </div>

        </div>

        <div className="part2">

            <div className="img-bg">
                <img src={fruitplate} alt="" style={{width:'690px'}}/>
                <img src={leaf} alt="" style={{width:'350px'}} className='leaf-img'/>
            </div>

        </div>

    </div>




   
  )
}




export default Hero




