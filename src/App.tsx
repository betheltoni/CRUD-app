import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import Create from './Components/Create';
import Header from './Components/Header';
import Read from './Components/Read';
import Update from './Components/Update';
import api from "./Components/api/Post";





function App() {
  const LOCAL_STORAGE_KEY = "data";
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = Math.floor(Math.random() * 1000) + 1;

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await api.get('');
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (err:any) {
        console.log(err);
        console.log(err.message);
        setError(err.message);
            console.log(error);
      }      
    }
    fetchData();
  }, [error])
 
  const addDataHandler = () => {
    const createData =async () => {
      const response = await api.post('');
      // console.log(response);
      alert(`Your post has been created`);
    }
    createData();
  }

  const removeDataHandler = () => {
    const deleteData =async () => {
      try {
        const response = await api.delete(`/ ${id}`);
      // console.log(response);
      alert("Your post has been deleted");
      } catch (err:any) {
        console.log(err);
        console.log(err.message);
      }
      
    }
    deleteData();
  }

  const updateDataHandler = (updatedDatum:any) => {
    console.log(updatedDatum);
    const updateData= async () => {
      try {
        const response = await api.put(`/${Number(updatedDatum.id)}`);
      console.log(response);
      alert("Your post has been updated")
      } catch (err:any) {
        console.log(err);
        console.log(err.message);
      }
    }
    updateData();
  }

  

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data])

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/update' element={<Update updateDataHandler={updateDataHandler} />} />
        <Route path='/create' element={<Create addDataHandler={addDataHandler} />} />
        <Route path='/CRUD-app/' element={<Read data={data} removeDataId={removeDataHandler} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
