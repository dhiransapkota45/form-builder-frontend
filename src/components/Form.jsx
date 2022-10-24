import React from 'react'
import { inputData } from "../InputFieldDetails"
import { MdDeleteOutline, MdEdit } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../features/modalSlice'
import { addfield, deleteField, deleteAllField, addFormname, submitform, aftersubmit } from "../features/formSlice"
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"



const style = {
  btnstyle: `w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3`
}

const Form = () => {

  const formFields = useSelector((state) => state.form.formfields)
  const formname = useSelector((state) => state.form.formname)
  const navigator = useSelector((state) => state.form.navigate)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(submitform({ formname, formFields }))
  }
  useEffect(() => {
    if(navigator){
      dispatch(aftersubmit())
      navigate("/")
    }
  }, [navigator])
  return (
    <>
      <div className='w-full flex justify-center mt-8'>
        <div className='w-4/5 grid grid-cols-3 gap-4 ' >
          <div className='  col-span-2 '>
            <div className='text-3xl  text-left py-2'>Create Form</div>
            <form onSubmit={onSubmitHandler} className='border-2 rounded-t-md'>
              <div className='flex px-8 py-4 justify-between '>
                <input onChange={(e) => dispatch(addFormname(e.target.value))} className='p-2 border rounded-md w-64' type="text" placeholder='Enter form name' />
                <div>
                  <button type='submit' className='p-2 bg-blue-500 text-white rounded-md mx-4'>Save Form</button>
                  <button type="button" className='p-2 bg-blue-500 text-white rounded-md' onClick={() => dispatch(deleteAllField())} >
                    Reset
                  </button >
                </div>
              </div>
              <hr />
              {formFields.map((field, index) => {
                return (
                  <div key={index} className='grid grid-cols-8 px-8 py-4 gap-x-2'>
                    <div className='border-2 p-2 col-span-6 flex text-gray-400 rounded' >{field.fieldname}</div>
                    <button type='button' onClick={() => dispatch(deleteField(index))} className=' rounded-3xl hover:bg-gray-200  col-span-1 flex justify-center items-center'>
                      <MdDeleteOutline className=' text-2xl' />
                    </button>
                    <button type='button' onClick={() => dispatch(openModal(index))} className='rounded-3xl hover:bg-gray-200 flex justify-center items-center p-2 col-span-1'>
                      <MdEdit className='text-3xl' />
                    </button>
                  </div>
                )
              })}
            </form>

          </div>
          <div className=''>
            <div className='p-2 border'>
              <div><button onClick={() => dispatch(addfield(inputData.text))} className={style.btnstyle}>Add a text field</button></div>
              <div><button onClick={() => dispatch(addfield(inputData.email))} className={style.btnstyle}>Add a email field</button></div>
              <div><button onClick={() => dispatch(addfield(inputData.number))} className={style.btnstyle}>Add a phone no.</button></div>
              <div><button onClick={() => dispatch(addfield(inputData.date))} className={style.btnstyle}>Add a date</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form