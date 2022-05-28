import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = ({addDataHandler}: {addDataHandler:any}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    let navigate = useNavigate();

    const create = (e:any) => {
        e.preventDefault();
        addDataHandler({title, body})
        setTitle("");
        setBody("");
        navigate("/");

    }
  return (
   <form className='create' onSubmit={create} >
       <div className='form-control'>
           <label>Title</label>
           <input type="text" placeholder='Add Title' required value={title} onChange={(e) => {
               setTitle(e.target.value)
           }} />
       </div>
       <div className='form-control'>
           <label>Body</label>
           <input type="text" placeholder='Add Title' required value={body} onChange={(e) => {
               setBody(e.target.value)
           }} />
       </div>
       <div className='form-btn-wrapper'>
       <button className='button-update'>Save</button>
       <Link to="/">
           <button className='button-delete'>Back</button>
       </Link>
       </div>
       
   </form>
  )
}

export default Create