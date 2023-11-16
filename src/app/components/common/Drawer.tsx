import React from 'react'
import Button from './Button'

type IDrawerPropTypes ={
    open:boolean,
    onClose: ()=>void,
    title: string,
    children: React.ReactNode
}

function Drawer({open,onClose,title,children}:IDrawerPropTypes) {
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
    const drawerbox:React.CSSProperties={
        display:"flex",
        height:"100vw",
        width:"fit-content",
        backgroundColor:'var(--primary)',
        flexDirection:"column",
        padding:"16px 60px",
        placeSelf:"flex-start",
        color:"var(--primarytext)",
        transitionDuration:".5s ease"
        
    }
  return (
    <>
    {open && <div style={overlay} className='Drawermenu'>
        <div style={drawerbox} className='Drawerbox'>
            <div style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                <div style={{marginRight:"12px"}}>{title}</div>
                <Button className='close-button' onClick={onClose} style={{position:"relative",top:"-36%",left:"62%"}} variant='primary'>X</Button>
            </div>
            <div className='drawerchild'style={{display:"flex",flexDirection:"column",gap:"8px",marginTop:"48px"}}>{children}</div>
        </div>
    </div>}
    </>
  )
}

export default Drawer