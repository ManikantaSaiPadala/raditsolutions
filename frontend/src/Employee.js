import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Employee() {
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setEmployee(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) => {
        try{
            await axios.delete('http://localhost:8081/employee/' + id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center  align-items-center'>
        <div className='w-75 p-5 bg-white rounded'>
            <Link to="/create" className='btn btn-success p-2'>Add + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Office</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((data, i) => (
                            <tr key={i}>
                                <td>{data.Name}</td>
                                <td>{data.Office}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} className='btn btn-primary m-2'>Update</Link>
                                    <button className='btn btn-danger' onClick={ e => handleDelete(data.ID)}>Delete</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Employee