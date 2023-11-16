import React, { useState } from 'react'
import autosize from 'autosize'

interface ITextfield extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  onChange:(event:React.ChangeEvent<HTMLTextAreaElement>)=>void
  style?:React.CSSProperties
}

function Textfield(props:ITextfield) {
  const {onChange ,style,...others} = props
  const textfSt = {
    padding:"4px",
    outline:"none",
    backgroundColor:"#80808029",
    borderRadius:"4px",
    border:"1px solid black",
    margin:"8px 8px",
    minWidth:"400px"
  }
  autosize(document.querySelectorAll('textarea'))
  return (
    <textarea type='text' onChange={onChange} style={{...textfSt,...style}}  {...others}></textarea>
  )
}

export default Textfield

