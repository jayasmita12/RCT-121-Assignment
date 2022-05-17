import React from 'react'

export const RestaurantCard = (props) => {
    const {id,restaurant_name,card_image,rating,payment_method}=props
  return (
    <div>
        <img src={card_image} alt="" />
    </div>
  )
}
