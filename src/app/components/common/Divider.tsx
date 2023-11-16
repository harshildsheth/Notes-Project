import React from 'react'

interface IDivider {
  type:"horizontal" | "vertical"
  length:string 
  style?:React.CSSProperties
}

function Divider(props:IDivider) {
  const {type,length,style}=props
  let transform:string=""
  if (type==='vertical'){
    transform="rotate(90deg)"
  }
  else
  {
    transform="rotate(180deg)"
  }
  const hrstyle:React.CSSProperties = {
    width:length,
    transform:transform,
  }
  return (
    <hr style={{...hrstyle,...style}}/>
  )
}

export default Divider