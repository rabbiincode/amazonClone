import { useStateValue } from '../contextApi/StateProvider';
import BasketItem from './BasketItem';
import SubTotal from './SubTotal';
import React, { forwardRef } from 'react'
// import FlipMove from 'react-flip-move'
import { Flipper, Flipped } from 'react-flip-toolkit'
import './_checkout.scss'

const CheckOut = () => {

  const [{ basket }, dispatch] = useStateValue()

  return(
   <div className='checkout'>

    <div className="checkout-1">

      <div className="pictures">
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
        <img src="images/home/checkout.jpg" alt="" className='pic'/>
      </div>
      
      <div>
        <h2 className="heading">Your Shopping Basket</h2>
        {/* <BasketItem 
             image='images/home/product1.jpg'
             name='item-name'
             price='199'
             ratings='-----' 
             id='5'
          />
          <BasketItem 
             image='images/home/product1.jpg'
             name='item-name'
             price='199'
             ratings='-----' 
             id='5'
          /> */}
        <Flipper flipKey={2} stagger>
        {basket.map(item => (
          <BasketItem 
             image={item.image} 
             name={item.name} 
             price={item.price} 
             ratings={item.ratings} 
             id={item.id}
             key={item.id}
          />
        ))}
        </Flipper>
        
      </div>
    </div>
    
    <div className="checkout-2">
       <SubTotal/>
    </div>

   </div>
  )
};

export default CheckOut;
