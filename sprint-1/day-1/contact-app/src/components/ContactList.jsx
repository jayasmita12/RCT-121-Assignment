import React, { useState } from 'react'
import { ContactCard } from './ContactCard'


const initialstate = [{
  id: 1,
  first_name: "Annette",
  last_name: "Murphy",
  email: "sara.cruz@example.com",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiMlc3FyrJpwKC8cDsjFGEet5UF-YwRi-NuQ7qPOiO8Gd8WC2uFCfyONKcKdDSqul3yQ&usqp=CAU",
  phone: "+91-9435271645"
}, {
  id: 2,
  first_name: "Theresa",
  last_name: "Watson",
  email: "michale.mitchell@example.com",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lB0zHrt60hoQLrfN_6yRD38TDrxrhgsw1Q&usqp=CAU",
  phone: "+91-6435271645"
}, {
  id: 3,
  first_name: "Cody",
  last_name: "Howard",
  email: "michale.mitchell@example.com",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVRgEbUUPxuyxnFw1ZPt9_LVc0LYE8uFNhA&usqp=CAU",
  phone: "+91-7832716567"
},{
  id: 4,
  first_name: "Max",
  last_name: "Lane",
  email: "maxlane@example.com",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBuEXyrP27kP4tIunZPGJVS1fUKAvJS5dcg&usqp=CAU",
  phone: "+91-345679876"
},{
  id: 5,
  first_name: "Marvine",
  last_name: "Fisher",
  email: "marvinFisherl@example.com",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrVcqEH4A6iu0cmDaku1VVX0LQ8a4roWziA&usqp=CAU",
  phone: "+91-9234467779"
},{
  id: 6,
  first_name: "Brookly",
  last_name: "Maccoy",
  email: "Brookly@example.com",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iYqK6gF5_vVypw6xrxzSfcwTknOFf9Qx2w&usqp=CAU",
  phone: "+91-7567324555"
}]

export const ContactList = () => {
  const [contactlist, setContactlist] = useState(initialstate)
  
  return (
    <div className='contact-form'>
      {
        contactlist.map(e => {
          return (
           <ContactCard 
           first_name={e.first_name} 
           last_name={e.last_name}
            email={e.email}
             image_url={e.image_url} 
             phone={e.phone} />
          )
        })
      }
    </div>
  )
}
