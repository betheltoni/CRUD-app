import React from 'react'
import { Link } from 'react-router-dom';

const ReadTable = (props: { data: { id: any; userId: any; title: any; body: any;  }, clickHandler:any; }) => {
    const { id, userId, title, body,}= props.data
  return (
    
        <table className='read-table'>
            <tbody>
                <tr>
                    <td className='id-column'>
                        {id}
                    </td>
                    <td className='userId-column'>
                        {userId}
                    </td>
                    <td className='title-column'>
                        {title}
                    </td>
                    <td className='body-column'>
                        {body}
                    </td>
                    <td className='update-column'>
                        <Link to={"/update?q=" + id}>
                       <button className='button-update' >Update</button>
                       </Link>
                    </td>
                    <td className='delete-column'>
                    <button className='button-delete' onClick = {()=> props.clickHandler(id)} >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    
  )
}

export default ReadTable