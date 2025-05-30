import React, {useEffect, useState} from 'react'
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {MdOutlineAddBox} from 'react-icons/md';
import axios from 'axios';
import Table from '../components/home/Table';
import Card from '../components/home/Card';
const backenduri = import.meta.env.VITE_BACKEND_URI;


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  useEffect(() => {
    setLoading(true);
    axios.get(`${backenduri}/books`).then((res) => {
      setBooks(res.data.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
    })

  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4 '>
        <button className='bg-sky-800 px-4 py-2 rounded-lg'
          onClick={()=>setShowType('table')}>
          Table
        </button>
        <button className='bg-sky-800 px-4 py-2 rounded-lg'
          onClick={()=>setShowType('card')}>
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to= '/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading? (
        <Spinner/>
      ):
        showType==='table'?<Table books = {books}/>:<Card books={books}/>
      }
    </div>
  )
}

export default Home
