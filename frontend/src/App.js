import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import  UpdateEmployee from './UpdateEmployee';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />}></Route>
          <Route path='/create' element={<CreateEmployee />}></Route>
          <Route path='/update/:id' element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App