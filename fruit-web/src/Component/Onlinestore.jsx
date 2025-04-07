import React from "react";
import './Onlines.css'
import plate2 from '../assets/fruit-plate2.png'

const Onlinestore = () => {
  return (
    <div className="container5">
      <div className="brandinfoo">
        <p>ONLINE FRUIT STORE</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          recusandae cum modi ab earum, beatae accusamu
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          recusandae cum modi ab earum, beatae accusamus corporis facere in
          dolore?
        </p>

        <button>Download The App</button>
      </div>

      <div className="brandimg">
        <img src={plate2} alt="" style={{ width: "550px" }} />
      </div>
    </div>
  );
};

export default Onlinestore;
