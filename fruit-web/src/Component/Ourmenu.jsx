import React from 'react'
import './Our.css';
import list from './data';
import apl from '../assets/download (4).jpeg'
import orange from '../assets/orange.jpg'
import ava from '../assets/avocado.webp'
import cherry from '../assets/cherry.png'
import toast, { Toaster } from 'react-hot-toast';


const Ourmenu = ({setProductid,goToOurMenu}) => {

  const handlecart=(id)=>{
    // alert("Product added");
    setProductid(id)
    toast.success('Product Added Successfully !')
    
  }
  return (
    <div className='container3' id='our'>
       <Toaster />

        <div className="our">

         <p>OUR MENU</p>

      </div>

      <div className="allp">

      {
        list.map((product,index)=>{
          return (
            <div className="main" key={product.id}>

             

            <div className="apple">

            <img src={product.img} alt="" style={{width:'103px',height:'105px'}}/>

            <div className="appp">
            <p>{product.title}</p>
            <p>{product.Price}</p>
            <button className='dd' onClick={()=>handlecart(product.id)} >Add Cart</button>
            </div>

            


            </div>
            {product.id === 5 && <div style={{ width: '100%' }}></div>}
        </div>
          );
        })
       
      }
      </div>
     


      

    </div>
    
  )
}

export default Ourmenu
