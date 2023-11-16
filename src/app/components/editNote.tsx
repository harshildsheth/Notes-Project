"use client"
import * as React from 'react';
import { deleteNote, editNote } from '@/api/notesapi';
import { INote } from '@/api/types';
import { useRouter } from 'next/navigation';
import DialogBox from './Dialog';
import Textfield from './common/Textfield';
import Button from './common/Button';
import Divider from './common/Divider';


type EditNotePropType = {
  id:number,
  title:string,
  textNote:string
}

//function EditNote(props:EditNotePropType) || function EditNote(props:{id:number,title:string,textNote:string}) || function EditNote({id,title,textNote}:{id:number,title:string,textNote:string})
export default function EditNote(props:EditNotePropType) {

  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const [openDel , setOpenDel] = React.useState(false);

  const [dataEdit,setDataEdit]=React.useState({
    title:props.title,
    textNote:props.textNote
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSave(){
    if(dataEdit.title===props.title && dataEdit.textNote===props.textNote)
    {
      handleClose()
      return
    }
    editNote({
        id:props.id,
        ...dataEdit
    })
    handleClose()
    router.refresh();
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>)
    {
        setDataEdit(prev=>{
            return ({
            ...prev,
            [event.target.name]:event.target.value
            })
        })
    }

    function handleDelete() {
        deleteNote(props.id)
        router.refresh();
    }
    const editbuttonbox:React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      marginTop: "16px"
    }
    

  return (
    <div>
      <div style={editbuttonbox}>
        <Button variant='primary' onClick={handleClickOpen}>
          EDIT
        </Button>
        <Button variant="secondary" onClick={()=>setOpenDel(true)}>
          DELETE
        </Button>
      </div>
     
      <DialogBox title='Confirm Delete' open={openDel} onClose={()=>setOpenDel(false)}  cancelText='Cancel' confirmText='OK' onCancel={()=>setOpenDel(false)} onConfirm={()=>{handleDelete();}}>
        <p>Are you sure you want to delete this?</p>
      </DialogBox>

      <DialogBox open={open} onClose={handleClose} cancelText='Cancel' confirmText='Save' onCancel={handleClose} onConfirm={handleSave} title='Edit Here'>
        <Divider length='100%' type='horizontal' style={{marginBottom:"12px"}}/>
          <Textfield
            autoFocus
            placeholder='Title'
            id="title"
            type="text"
            value={dataEdit.title}
            name='title'
            onChange={handleChange}
            
          />
          <Textfield
            autoFocus
            placeholder='Note'
            id="textNote"
            type="text"
            value={dataEdit.textNote}
            name='textNote'
            onChange={handleChange}
          />
      </DialogBox>
    </div>
  );
}
