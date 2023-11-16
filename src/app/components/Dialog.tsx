
import React from 'react'
import Button from './common/Button'

type DialogPropType={
    open:boolean,
    onClose: ()=>void,
    onConfirm: ()=>void,
    onCancel: ()=>void,
    title: string,
    children: React.ReactNode 
    confirmText: string,
    cancelText: string
}

function DialogBox({open,onClose, onConfirm, onCancel, title, children,confirmText,cancelText }:DialogPropType) {
  const overlay:React.CSSProperties = {
    backgroundColor:"#0000006b",
    height:"100vh",
    width:"100vw",
    position:"fixed",
    top:0,
    left:0,
    placeItems:"center",
    display:"grid",
    backdropFilter:"blur(4px)",
    zIndex:9999
  }
  const dbox = {
    height:"fit-content",
    width:"fit-content",
    display:"block",
    backgroundColor:"white",
    borderRadius:"5px",
    padding:"16px"
  }
  return (
    <>
      {open && <div style={overlay}>
        <div style={dbox}>
            <div style={{fontSize:24,fontWeight:500,marginBottom:"8px"}}>{title}</div>
            <div>{children}</div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              marginTop:"16px"
            }}>

              <Button style={{marginRight:8}} onClick={()=>{onCancel();onClose()}} variant="secondary">{cancelText}</Button>
              <Button  onClick={()=>{onConfirm();onClose()}} variant="primary">{confirmText}</Button>
            </div>
        </div>
      </div>}
    </>
  )
}

export default DialogBox