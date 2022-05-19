import React,{useEffect, useState} from 'react'
import AddRestaurantForm from './AddRestaurantForm'

import { RestaurantCard } from './RestaurantCard'

export const RestaurantDetails = () => {
    const [details,setDetails]=useState([])
    const [newdetails,setNewdetails]=useState([])


    useEffect(()=>{
      getrestaurantData()
    },[])

    
    const getrestaurantData =async()=>{
        let res=await fetch("http://localhost:8080/restaurants")
        let data =  await res.json()
        console.log(data)
        setNewdetails(data)
        setDetails(data)
    }

  const handlesubmit= async(formdata)=>{
    let res = await fetch(" http://localhost:8080/restaurants",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formdata)
    })
    let data = await res.json()
    console.log(data)
  }

  const above4star=()=>{
   const filterdata=details.filter(e=>{
     if(e.rating>=4 && e.rating <5){
       return e
     }
   })
    setNewdetails(filterdata)
  }
  
  const above3star=()=>{
    const filterdata=details.filter(e=>{
      if(e.rating>=3 && e.rating<4){
        return e
      }
    })
     setNewdetails(filterdata)
  }

  const above2star=()=>{
    const filterdata=details.filter(e=>{
      if(e.rating>=2 && e.rating<3){
        return e
      }
    })
     setNewdetails(filterdata)
  }

  const above1star=()=>{
    const filterdata=details.filter(e=>{
      if(e.rating>=1 && e.rating<2){
        return e
      }
    })
     setNewdetails(filterdata)
  }
  
const highTolow=()=>{
   let sorting= details.sort((a,b)=>(b.cost_for_one - a.cost_for_one)).filter(e=>{
     return e
   
   })
  
   setNewdetails(sorting)
}
const lowTohigh=()=>{
  let sorting= details.sort((a,b)=>(a.cost_for_one - b.cost_for_one)).filter(e=>{
  
      return e
   
  })
 
  setNewdetails(sorting)
}

  return (
    <div>
        


        <AddRestaurantForm handlesubmit={handlesubmit} />
       
     
        {newdetails.map(e=>{
        
          
         
          return(
            
            
            <RestaurantCard 
            key ={e.id}
            id={e.id}
            restaurant_name={e.restaurant_name}
            card_image={e.card_image}
            rating={e.rating}
            payment_methods={e.payment_methods}
            cost_for_one={e.cost_for_one}
           
            />)
          
        //}
      })}


<div>
     <button onClick={above1star}>1 Star</button>
     <button onClick={above2star}>2 Star</button>
     <button onClick={above3star}>3 Star</button>
    <button onClick={above4star}>4 star</button>
  </div>

      {/* <div>
      <button onClick={cashpayment}>Cash</button>
     <button onClick={cardpay}>Card</button>
     <button onClick={above3star}>All</button>
      </div> */}
      

      <div>
        <button onClick={highTolow}>high to low</button>
        <button onClick={lowTohigh}>low to high</button>
      </div>
      
    </div>
  )
 }
