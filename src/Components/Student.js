import React from 'react'
import Names from '../Components/Names';

function Student() {
  return (
    <div>
      <div className='h-[60vh] w-[50vh] border border-2 border-purple-800 rounded-2xl p-9 text-center'>
        <h1 className=' text-2xl font-bold text-cyan-700 p-3'>Student List :</h1>
        <Names />
      </div>
    </div>
  )
}

export default Student;