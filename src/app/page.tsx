import * as React from 'react';
import NewNote from './components/form';
import Note from './components/note';
import { allNotes } from '@/api/notesapi';
import Appbar from './components/common/Appbar';
import Avatar from './components/common/Avatar';
import Link from 'next/link';
import Button from './components/common/Button';



async function Home() {  
  let data = await allNotes()
  // data = data.reverse()
  console.log(data)
  
  return (
    <div className='page'>

      <Appbar>
        
        <Link href='/' style={{padding:"12px",fontSize:"28px",margin:"12px 12px",fontWeight:"600",marginLeft:"24px",color:"white"}}>KwikNotes</Link>
        <div>
          <Link href='/form' style={{marginRight:"28px",color:"white"}}>SIGN UP</Link>
          <Link href='/loginform' style={{marginRight:"28px",color:"white"}}>LOG IN</Link>
        </div>
        
      </Appbar>
    
      <div className='Text-field'>
        <NewNote/>
      </div>

      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        {data.map((ele,id)=>(
            // <div key={index}>{ele.title} {ele.textNote}</div>
            //<Note key={ele.id} title={ele.title} note={ele.textNote}  />
            <Note key={ele.id} note={ele}/>
        ))}
      </div>

    </div>
  )
}
export default Home
  


