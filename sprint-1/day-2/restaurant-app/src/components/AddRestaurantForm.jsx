import React, { useState } from 'react'

export default function AddRestaurantForm({handlesubmit}) {
    const [form,setForm]=useState({
        restaurant_name:"",
        rating:"",
        cost_for_one:""
    })
    const handlechange =(e)=>{
        setForm({
            ...form,
            [e.target.id]:e.target.value
        })
    }
    
  return (
    <div>
        <input type="text" id="restaurant_name" value={form.restaurant_name} onChange={handlechange} placeholder='Restaurant Name' />
        <input type="number" id="rating" value={form.rating} onChange={handlechange} placeholder='rating' />
        <input type="number" id="cost_for_one" value={form.cost_for_one} onChange={handlechange} placeholder='cost_for_one' />
        <button onClick={()=>handlesubmit(form)}>Submit</button>
    </div>
  )
}
