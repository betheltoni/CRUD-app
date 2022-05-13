import React from 'react'
import { Link } from 'react-router-dom'
import ReadTable from './ReadTable'


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

    const deleteDataHandler = (id:any) => {
      props.removeDataId(id);
    }




    const renderTable = props.data.map((datum:any, index:number) => {
        return(
            <ReadTable data={datum} key={index} clickHandler={deleteDataHandler} />
        )
    })
  return (
    <div>
      <Link to="/create">
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
      
      {renderTable}
    </div>
  )
}

export default Read