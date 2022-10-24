import React from 'react'
import { useParams } from 'react-router-dom'
import { getform } from '../features/formsubmitSlice'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import { submission } from '../features/submissionSlice'
import { useNavigate } from 'react-router-dom'
import { loadFormDetails } from '../features/homepageSlice'


const FormSubmit = () => {
    const [formsubmit, setFormsubmit] = useState({})
    const dispatch = useDispatch()
    const { formid } = useParams()
    const navigate = useNavigate()

    const formdetails = useSelector((store) => store.formsubmit)
  
    const onchangeHandler = (e) => {
        setFormsubmit({ ...formsubmit, [e.target.name]: e.target.value })
    }
    const onsubmitHandler = (e) => {
        e.preventDefault()
        dispatch(submission({formid, ...formsubmit}))
        dispatch(loadFormDetails(localStorage.getItem("userid")))
        navigate("/")

    }
    useEffect(() => {
        dispatch(getform(formid))
    }, [])

    return (
        <div className='mt-20 flex justify-center'>
            <form onSubmit={onsubmitHandler} className='p-4 shadow-lg border shadow-blue-100 rounded w-4/5 md:w-3/5 lg:w-1/2'>
                <div>Formname: {formdetails.data.formname}</div>
                <hr />
                <div>
                    {
                        formdetails.data.formFields && formdetails.data.formFields.map((inputs, index) => {
                            return (
                                <div className='my-3' key={index}>
                                    <input name={inputs.fieldname} onChange={onchangeHandler} required={inputs.required} className='w-full p-2 border rounded' type={inputs.type} placeholder={inputs.fieldname.toUpperCase()} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mt-6'>
                    <input required={true} onChange={onchangeHandler} name="submitter" className='w-full md:w-1/2 p-2 border rounded' type="email" placeholder='Enter Submitter email*' />
                </div>
                <button className=' mt-4 p-2 bg-blue-500 hover:bg-blue-400 rounded text-white'>Submit</button>
            </form>
        </div>
    )
}

export default FormSubmit
