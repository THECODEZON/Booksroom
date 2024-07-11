import React, { useEffect, useState } from 'react'


import {Link} from 'react-router-dom';
import Cards from "../component/Cards";
import axios from 'axios'
import list from '../../public/list.json'


function Course() {

  const [book , setBook]=useState([]);
  useEffect(()=>{
const getBook=async()=>{
  try{
    const res =await axios.get("http://localhost:4001/book")
console.log(res.data);
setBook(res.data);
  }catch(error){
   console.log(error);
  }
}
getBook();
  },[])



  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
   <div className='mt-29 items-center justify-center text-center '>
   <h1 className='text-5xl  md:text-4xl animate-bounce p-20'>Welcome to <span className='text-green-400 text-2xl animate-bounce py-7'>Kitabroom course!!!</span></h1>

   <p className='text-2xl mt-12 md:text-1xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam maxime quae, eum magni similique animi facilis reprehenderit eaque vero
     maiores itaque natus iure soluta eveniet totam laudantium aspernatur quaerat. Molestias.</p>
    <Link to="/">
    <button className=' items-center justify-center text-white text-center my-6 bg-green-600 hover:bg-green-300  rounded-sm px-10'>➞Back</button>
    </Link>
   </div>
   <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
   </div>

   </>
  )
}

export default Course
