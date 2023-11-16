import React, { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
    variant: "primary" | "secondary"
    children: React.ReactNode,
    style?:React.CSSProperties
}

function Button(props:IButton) {
    const {onClick,variant,children,style,...others}=props
    const buttonbox = {
        height:"fit-content",
        width:"fit-content",
        backgroundColor: variant==="primary"? "var(--primary)":"var(--secondary)",
        cursor:"pointer",
        padding:"8px 12px",
        color:"white",
        borderRadius:"5px",
        margin: "4px 4px",
    }
  return (
    <button onClick={onClick} style={{...buttonbox,...style}} {...others} onMouseEnter={()=>{}}>
        {children}
    </button>
  )
}

export default Button