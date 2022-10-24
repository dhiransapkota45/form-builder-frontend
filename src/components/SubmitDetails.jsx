import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { submissionDetails } from '../features/submissionDetailSlice'
const SubmitDetails = () => {
    const submittedData = useSelector((store) => store.submissionDetail.data)
    const { submissionid } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(submissionDetails(submissionid))
    }, [])
    return (
        <>
            <div className='flex flex-col items-center mt-11 '>
                <div className='w-4/5 md:w-1/2 border shadow-md rounded-md p-4'>
                    <div className=' font-bold'>
                        Form Details:

                    </div>
                    <div className='p-2'>
                        {
                            Object.keys(submittedData.values).map((key, index) => {
                                return (

                                    <fieldset key={index} className='border border-blue-500 bg-gray-100 rounded-md my-4'>
                                        <legend className='  mx-3 px-3 bg-white rounded  '>{key}</legend>
                                        <input type="text" value={submittedData.values[key]} disabled className='my-2 px-3 w-full' />
                                    </fieldset>

                                )
                            })
                        }
                    </div>

                    <div>
                        Submitted By: <span className=' font-semibold'>{submittedData.submitter}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitDetails