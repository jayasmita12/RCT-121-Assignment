import React,{useState} from 'react'
import "../module.css"

export const ContactCard = (props) => {
    const {first_name,last_name,email,phone,image_url}=props
    const [isactive,setIsactive]=useState(true)
  return (
      <div className='main-box'>
      <div className='container'>
    <div className='main-div'>
        <div className='image-style'>
            <img src={image_url} alt="" />
        </div>
        <div className='user-details'>
            <h3>{first_name} {last_name}</h3>
            <p>{email}</p>
            {
                isactive ? (<div className='click' onClick={()=>
                    setIsactive(!isactive)
                } >Click to show more</div>) :(<div className='click' onClick={()=>setIsactive(!isactive)}>{phone}</div>)
            }
        </div>
        <div>
        </div>
    </div>
    </div>
    </div>
  )
}
