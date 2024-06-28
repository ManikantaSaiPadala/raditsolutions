import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployee() {
    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, { name, office, email })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Employee</h2>
                    <div className='d-flex flex-column justify-content-start'>
                        <div className='m-2'>
                            <label style={{ fontWeight: 'bold' }} htmlFor='name'>Name</label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='form-control m-2'
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='m-2'>
                            <label style={{ fontWeight: 'bold' }} htmlFor='office'>Office</label>
                            <input
                                type='text'
                                placeholder='Enter Office Name'
                                className='form-control m-2'
                                onChange={e => setOffice(e.target.value)}
                            />
                        </div>
                        <div className='m-2'>
                            <label style={{ fontWeight: 'bold' }} htmlFor='email'>Email</label>
                            <input
                                type='text'
                                placeholder='Enter Email'
                                className='form-control m-2'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className='btn btn-success p-2'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployee;
