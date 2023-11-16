import React from 'react'
import EditNote from './editNote'
import { INote } from '@/api/types'
import { wrap } from 'module'
import Divider from './common/Divider'

 

function Note({note}:{note:INote}) {
  const titlebox:React.CSSProperties = {
    marginBottom:"8px",
    fontSize: "20px",
    fontWeight: "400",
    wordBreak:"break-word"
  }
  const notebox:React.CSSProperties = {
    borderRadius: "8px",
    margin: "12px 12px"
  }
  const notepagediv:React.CSSProperties = {
    display:"flex",
    flexDirection:"row"
  }
  return (
    <div className='Note-holder' style={notebox}>
        <div className='title-heading' style={titlebox}>
            {note.title}
        </div>
        <Divider length='100%' type='horizontal' style={{marginBottom:"8px"}}/>
        <div className='note-data' style={{marginBottom:8,display:"flex",wordBreak:"break-word"}}>
            {note.textNote}
        </div >
        <EditNote id={note.id as number} title={note.title as string} textNote={note.textNote as string} />
    </div>
  )
}

export default Note