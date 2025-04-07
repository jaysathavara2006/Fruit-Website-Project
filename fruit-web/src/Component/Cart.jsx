import React, { useState } from 'react'
import './Cart.css';
import appl from '../assets/download (4).jpeg'
import { FaTrash } from "react-icons/fa";

const Cart = ({cartallpr, setCartallpr}) => {

  const [count,setCount]=useState(1)

  console.log('product is:',cartallpr)

  

  

      

      const hdelete=(id)=>{
       const deldata=cartallpr.filter((item)=>item.id !== id)
      setCartallpr(deldata)
      }
 
  return (

    <div className="abc">
    {
      cartallpr.map((data)=>{

        return (

        <div className='cart-container'>

        <div className="prmain">
        <div className="prdata">
        <img src={data.img} alt="" style={{width:'150px'}}/>
  
        <div className="prttmain">
  
        <div className="prtitl">
        <p>{data.title}</p>
        <p>{data.Price}</p>
        </div>
  
        <div className="counter">
          <p  onClick={() => setCount(count>1?count-1:count)} >-</p>
          <p>{count}</p>
          <p  onClick={() => setCount(count +1)}>+</p>
        </div>
  
        </div>
      
      <div className="delma">  
        <div className="dellogo">
          <p onClick={()=> hdelete(data.id)}><FaTrash /></p>
  
        </div>
        </div>
        
  
        </div>
        
        
  
        </div>

        
       
      </div>
        )
      })
    }


    { cartallpr.length == 0 && (
      <div>
        <p style={{textAlign:'center', padding:'40px', fontSize:'40px', fontWeight:'bold'}}>No Product Available in cart</p>
      </div>
    ) 

    }

        
        { cartallpr.length > 0 && (
          <div className="paybtnmain">
          <button>Pay Now</button>
          </div>
        )
        }

   

</div>




   
  )
}

export default Cart
