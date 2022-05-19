import React from 'react'
import "./restaurant.css"

export const RestaurantCard = (props) => {
    const {id,restaurant_name,card_image,rating,payment_method,cost_for_one}=props
  
     
  return (
    <>
    <div className='Container'>
        <div className='image-name'>
        <h2>{restaurant_name}</h2>
        <img src={card_image} alt="" />
        <p>{cost_for_one}</p>
        </div>    
        <div>
          <p>{rating}</p>
        </div>
        
        
   </div>
  
   </>
  )
}
