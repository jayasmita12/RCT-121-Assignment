import React,{useState,useEffect} from 'react'
import axios from "axios"
import {GithubCard} from './GithubCard'
import  {GithubInput} from './GithubInput'

const getGithubuser=(q="jayasmita",page=1,per_page)=>{
 return   axios("http://api.github.com/search/users",{
        method:"GET",
        params:{
            q,
            per_page,
            page
        }
    })
}

export const Github = () => {
    const [data,setData]=useState([])
    const [query,setQuery]=useState("masai")
    const[page,setPage]=useState(1)
    const [per_page,setperpage]=useState(7)
    

    useEffect(()=>{
        getGithubuser(query,page,per_page)
        .then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[query,page])
    console.log(data.items)
    
    let pagecount =Math.floor( data.total_count/per_page)
   

    const handleClick=(query)=>setQuery(query)
    
        // const atoz=()=>{
        //     console.log(data)
        //     // const sorting = data?.items?.sort((a,b)=>(a.login>b.login)).map(e=>{
        //     //     return e
        //     // })
        //     // setData(sorting)
        // }

  return (
    <div>
        <h1>Github Users</h1>
        <GithubInput handleClick={handleClick}/>


        {
           data?.items?.map((item)=>(
              < GithubCard key={item.id} {...item}/>
           ))
         
        }
        <h3>Toatal Page:{pagecount}</h3>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>

        {/* <button onClick={atoz}>Ascending</button> */}
       
    </div>
  )
}
