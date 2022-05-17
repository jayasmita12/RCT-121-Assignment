import React,{useState} from 'react'
import data from "./data.json"
import { RestaurantCard } from './RestaurantCard'

export const RestaurantDetails = () => {
    const [details,setDetails]=useState(data)
  return (
    <div>
        {
            details.map(e=>{
                return  <RestaurantCard 
                id={e.id}
                restaurant_name={e.restaurant_name}
                card_image={e.card_image}
                rating={e.rating}
                payment_methods={e.payment_methods}
                />
            })
        }
    </div>
  )
}
