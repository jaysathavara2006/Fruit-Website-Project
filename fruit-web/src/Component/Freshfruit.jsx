import React from 'react'
import './Fresh.css';
import { IoBagHandleOutline } from "react-icons/io5";

const Freshfruit = () => {
  return (
    <div className='container6'>

        <div className='fruit-bg'>

            <div className='Fresh-content'>


                <div className="freshmain1">
                    <p>GET FRESH <span>FRUITS TODAY</span></p>
                </div>

                <div className="freshmain2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores molestias fuga ratione reprehenderit veniam facere dolor sit natus aperiam. Lorem ipsum dolor sit amet consectetur adipis.</p>
                </div>

                <div className="freshmain3">
                    <button><span><IoBagHandleOutline className='bag-bb'/></span> Order Now</button>
                </div>

                
            </div>
        </div>
      
    </div>
  )
}

export default Freshfruit
