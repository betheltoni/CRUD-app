import React, { useState } from 'react'
import { Link,  useNavigate, useLocation } from 'react-router-dom';


const LOCAL_STORAGE_KEY = "data";

const Update = ({updateDataHandler}:{updateDataHandler:any}) => {


  



  let query = useLocation();
  // console.log(query.search);
  let searchParams = query.search;
  console.log(searchParams);
  // const searchParams = new URLSearchParams(query.search);
  // console.log(searchParams);
 const key = searchParams.substring(3);
 console.log(key);
  // const key = searchParams.get('search')!.substring(3);
  // console.log(key);

  const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
  // console.log(retrieveData);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  let id = key;

  let navigate = useNavigate();

  const update = (e:any) => {
    e.preventDefault();
    if(title === '' || body === ''){
      alert("All feilds are mandatory");
      return;
  }
    const put = retrieveData.map((datum:any) => {
      console.log(Number(key), datum.id);
      if(Number(key) === datum.id){
        return{
          ...datum,
          id: key,
          title: title,
          body: body
        };
      }
      return datum;
    })
    updateDataHandler({id, title, body});
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(put));
    setTitle("");
    setBody("");
    navigate("/");
  }

  return (
    <form className='create' onSubmit={update} >
    <div className='form-control'>
        <label>Title</label>
        <input type="text" placeholder='Add Title' value={title} onChange={(e) => {
            setTitle(e.target.value)
        }} />
    </div>
    <div className='form-control'>
        <label>Body</label>
        <input type="text" placeholder='Add Title' value={body} onChange={(e) => {
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

export default Update