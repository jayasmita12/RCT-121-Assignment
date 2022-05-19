import React,{useState} from 'react'

export const GithubInput = ({handleClick}) => {
    const [text,setText]=useState("")
  return (
    <div>

        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter name"/>
        <button onClick={()=>handleClick(text)}>Search</button>
    </div>
  )
}
