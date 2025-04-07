import React from 'react'
import './Brand.css'
import plate1 from '../assets/fruits-splash.png'

const Brandinfo = () => {
  return (
    <div className='container-4'>

        <div className="brandimg">

            <img src={plate1} alt="" style={{width:'300px'}}/>

        </div>

        <div className="brandinfo">

            <p>BRAND INFO</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae cum modi ab earum, beatae accusamus corporis facere in dolore?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae cum modi ab earum, beatae accusamus corporis facere in dolore?</p>

            <button>Learn More</button>

        </div>
      
    </div>
  )
}

export default Brandinfo
