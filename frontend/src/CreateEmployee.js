import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateEmployee() {
    const [name, setName] = useState('')
    const [office, SetOffice] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name, office, email})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-4'>
            <form onSubmit={handleSubmit}>
                <h2>Add Employee</h2>
                <div className='d-flex flex-direction-column justify-content-start'>
                <div className='m-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control' 
                    onChange={e => setName(e.target.value)} />
                </div>
                <div className='m-2'>
                    <label htmlFor=''>Office</label>
                    <input type='text' placeholder='Enter Office Name' className='form-control' 
                    onChange={e => SetOffice(e.target.value)} />
                </div>
                <div className='m-2'>
                    <label htmlFor=''>Email</label>
                    <input type='text' placeholder='Enter Email' className='form-control'
                    onChange={e => setEmail(e.target.value)} />
                </div>
                </div>
                <button className='btn btn-success p-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateEmployee