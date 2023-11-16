import { newNote } from "./notesapi";
import { INote } from "./types";
import {useState} from 'react'

export default function useNotesApi() {
    const [loading,setLoading]=useState<boolean>(false)
    async function createNewNote(payload:INote) {
        setLoading(true)
        try{
            await newNote(payload)
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }    
    }
    return {
        loading, 
        createNewNote
    }
}


