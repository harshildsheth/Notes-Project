import React from 'react'

interface ITextbox extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange :(event: React.ChangeEvent<HTMLInputElement>)=>void
    style?:React.CSSProperties
}

function Textbox(props:ITextbox) {
    const {onChange,style,...others}=props

    const textboxstyle = {
        padding:"4px",
        outline:"none",
        backgroundColor:"#0db6e921",
        borderRadius:"4px",
        border:"1px solid black",
        margin:"auto",
        minWidth:"200px",
        color:"black"
      }
  return (
    <input onChange={onChange} style={{...style,...textboxstyle}} {...others}/>
  )
}

export default Textbox