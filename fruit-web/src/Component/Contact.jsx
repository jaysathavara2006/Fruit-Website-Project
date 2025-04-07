import React from 'react'
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      
      <div className="con-container">
        <p className='conname'>Contact Us</p>

        <div className="condetail">

            <div className="con1">


            <div className="addressmain">
                <div className="addlogo">
                    <p><FaLocationDot /></p>

                </div>

                <div className="addressdetail">
                    <p>Address</p>
                    <p>Radhanpur Road, Mehsana, Gujarat, 384002. </p>
                </div>

            </div>

            <div className="addressmain">
                <div className="addlogo">
                    <p><FaPhoneAlt /></p>
                    
                </div>

                <div className="addressdetail">
                    <p>Phone</p>
                    <p>+91 9925628090</p>
                </div>
            </div>

            <div className="addressmain">
                <div className="addlogo">
                    <p><FiMail /></p>
                </div>

                <div className="addressdetail">
                    <p>Email</p>
                    <p>sathavarajay2006@gmail.com</p>
                </div>
            </div>

            </div>

            <div className="con2">
                <div className="formmain">
                    <form action="">
                        <p>Send Message</p><br />

                        <label htmlFor="">Name</label><br />
                        <input type="text" name="name" id="name" />

                        <br /><br />

                        <label htmlFor="">Email</label><br />
                        <input type="text" name="mail" id="mail" /><br /><br />

                        <label htmlFor="">Type Your Message...</label><br />
                       <input type="text" name="txt" id="txt" /><br /><br /><br />

                      <button>Submit</button>
            
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
