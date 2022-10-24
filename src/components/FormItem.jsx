import React from 'react'
import { Link } from 'react-router-dom'
const FormItem = (formdetail) => {
  return (
    <div className='   m-4 p-4  flex flex-col items-center  bg-gray-100 rounded-md'>
      <Link className='cursor-pointer' to={`/submission/${formdetail._id}`}>
        <img className=' w-36 ' src="/images/formimage.png" alt="" />
        <div className='flex flex-col items-center mt-3 '>
          <div>{formdetail.formname ? formdetail.formname : "default name"}</div>
          <div>{formdetail.fieldCount} fields</div>
          <div>{formdetail.submissionCount} submissions</div>
        </div>
      </Link>

      <div className='my-3 flex justify-between w-full'>
        <Link to={`form/${formdetail._id}/submission`} target="_blank" className='bg-blue-400 text-white p-1 rounded'>Link</Link>
        <button className='bg-blue-400 text-white p-1 rounded'>Edit</button>
      </div>
    </div>

  )
}

export default FormItem
