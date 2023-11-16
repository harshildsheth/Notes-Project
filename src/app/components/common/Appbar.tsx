import React, { MenuHTMLAttributes } from 'react'

interface IAppbar extends MenuHTMLAttributes<HTMLDivElement>
{
    children:React.ReactNode
    style?:React.CSSProperties
}

function Appbar(props:IAppbar) {
    const {children , style}=props
    const appbarbox:React.CSSProperties ={
        height:60,
        width:"100%",
        backgroundColor:"var(--secondary)",
        display:"flex",
        flexDirection:"row",
        boxShadow: "0px 4px 4px -2px rgba(0,0,0,0.77)",
        placeItems:"center",
        justifyContent:"space-between",
        position:'sticky',
        top:'0px'
    }

  return (
    <div style={{...appbarbox,...style}}>
        {children}
    </div>
  )
}

export default Appbar