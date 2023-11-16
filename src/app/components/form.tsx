'use client'
import { newNote } from '@/api/notesapi'
import { INote } from '@/api/types'
import { useRouter } from 'next/navigation';
import { title } from 'process'
import React, { ChangeEvent, ReactEventHandler, useState } from 'react'
import Textfield from './common/Textfield';
import Button from './common/Button';
import useNotesApi from '@/api/useNotesApi';
import { revalidatePath } from 'next/cache';

function NewNote() {
    let a:string = "lkasnf"
    const router = useRouter()
    const {createNewNote,loading} = useNotesApi() 
    const [data,setData]=useState<INote>({
        title:"",
        textNote:""
    })
    
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>)
    {
        setData(prev=>{
            return ({
            ...prev,
            [event.target.name]:event.target.value
            })
        })
    }
    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault()
        // newNote(data)
        await createNewNote(data)
        router.refresh()
        // revalidatePath('/')
    }

  return (
    <div className='textfields'>
        {loading && <span>LOADING</span>}
        <form style={{alignItems:"center",display:"flex"}}>
            <Textfield
                value={data.title}
                placeholder="Enter Title here"
                style={{width:'250px'}}
                name='title'
                type='text'
                onChange={handleChange}
            />
            <Textfield
                placeholder="Enter Notes here"
                style={{width:'700px' }}
                name='textNote'
                type='text'
                value={data.textNote}
                onChange={handleChange}
            />
            <Button type='submit' variant='primary' onClick={handleSubmit}>
                SAVE
            </Button>
        </form>
        
    </div>
  )
}

export default NewNote