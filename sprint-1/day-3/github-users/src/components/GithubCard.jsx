import React from 'react'

export const GithubCard = ({avatar_url,login}) => {


  return (
    <div style={{display:"flex",gap:"30px"}}>
        <img src={avatar_url} width="100px" height="100px" alt={login} />
        <div>{login}</div>
    </div>
  )
}
