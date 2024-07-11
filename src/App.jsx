// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Home/Home'
import { Navigate,Route,Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './component/Signup';
import Publish from './Publish/Publish';
import Contacts from './Contacts/Contacts';
import Abouts from './Abouts/Abouts'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Book from '../../Backend/model/book.model';





export default function App() {
  const[authUser,setAuthUser]=useAuth ();
  console.log(authUser)

  const items = [
    // Your items here
  ];

  const addToCart = (item) => {
    // This function should add items to the cart in Navbar
  };


  return (
    <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course'    element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='Contacts' element={<Contacts/>}/>
    <Route path='Abouts' element={<Abouts />}/>
    <Route path='Publish' element={<Publish/>}/>

    



  </Routes>
  <Toaster />
  </div>
    </>
  )
}

