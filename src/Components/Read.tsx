import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReadTable from './ReadTable'
import api from "./api/Post";
import Error from './Error';

const Read = (props:any) => {
    // const data =[

    //     {
    //       id: "1",
    //       userId: "1",
    //       title: "Mr James",
    //       body: "Accountant"
    //     },
    //     {
    //       id: "2",
    //       userId: "1",
    //       title: "Mr John",
    //       body: "Cashier"
    //     },
    //     {
    //       id: "3",
    //       userId: "1",
    //       title: "Mr Jude",
    //       body: "Manager"
    //     }
    
    //   ]
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>([]);
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

    const deleteDataHandler = (id:any) => {
      props.removeDataId(id);
    }




    const renderTable = data.map((datum:any, index:number) => {
        return(
            <ReadTable data={datum} key={index} clickHandler={deleteDataHandler} />
        )
    })
  return (
    <div>
      { 
      error ? ( <div> < Error errorMessage={error} /> </div> ) :
      loading ? (<p>loading data ....</p>) :
      ( <div><Link to="/create">
          <button className='create-button'>Create</button>
      </Link>
      <table className='read-table'>
            <tbody>
                <tr>
                    <td className='id-column'>
                        <h3>Id</h3>
                    </td>
                    <td className='userId-column'>
                        <h3>UserID</h3>
                    </td>
                    <td className='title-column'>
                        <h3>Title</h3>
                    </td>
                    <td className='body-column'>
                        <h3>Body</h3>
                    </td>
                    <td className='update-column'>
                    </td>
                    <td className='delete-column'>
                    </td>
                </tr>
            </tbody>
        </table>
      
      {renderTable} </div>) }
    </div>
  )
}

export default Read