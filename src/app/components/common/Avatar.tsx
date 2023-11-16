import React, { ButtonHTMLAttributes } from 'react'

interface IAvatar extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?:string,
    source?:string,
    style?:React.CSSProperties
}

function Avatar(props:IAvatar) {
    const {text , source , style}=props
    const styledAvatar:React.CSSProperties = {
        display: "grid",
        placeItems: "center",
        borderRadius:"50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        border: "1px solid white",
        backgroundColor: "#f95858", 
        fontWeight: "700",
        fontSize: "20px",
        color: "white",
    }
  return (
    <button style={{...styledAvatar,...style}} >
        {text ? text : source ? <img style={{height:"100%",width:"100%"}} src={source} /> : <></> }
    </button>
  )
}

export default Avatar