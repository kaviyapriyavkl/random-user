import React from 'react'

const Button = ({isActive,clicked})=>{
  return (
    <div>
        <button onClick={clicked}>{isActive ? "Get Another Uer" : "Get User"}</button>
    </div>
  )
}

export default Button