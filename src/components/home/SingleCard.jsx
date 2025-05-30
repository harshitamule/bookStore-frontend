import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight} from 'react-icons/pi'
import { BiUserCircle} from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

const SingleCard = ({book}) => {
  return (
    <div key={book._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1'>
        <h2 className='absolute top-1 right-2 px-4 py-1 bg-sky-600 rounded-lg'>
            {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-300'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-sky-600 text-2xl'/>
            <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-sky-600 text-2xl'/>
            <h2 className='my-1'>{book.author}</h2>
        </div>
        <div className='flex felx-row justify-around items-center mt-4'>
            <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle className='text-2xl text-green-400 hover:text-white'/>
            </Link>
            <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-300 hover:text-white'/>
            </Link>
            <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className='text-2xl text-red-500 hover:text-white'/>
            </Link>
        </div>
    </div>
  )
}

export default SingleCard
