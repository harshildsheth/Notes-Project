import axios from "axios";
import { INote } from "./types";


export async function allNotes() {
    let notes:INote[] = [];
    const result = await axios.get("http://localhost:3001/notes")
    notes=result.data
    return notes
}

export async function newNote(payload:INote) {
    return await axios.post("http://localhost:3001/notes",payload)
}
 
export async function editNote(payload:INote) {
    return await axios.patch("http://localhost:3001/notes/"+payload.id,payload)
}

export async function deleteNote(id:number) {
    return await axios.delete("http://localhost:3001/notes/"+id)
}