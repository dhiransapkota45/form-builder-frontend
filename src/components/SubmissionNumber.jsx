import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { submissionsDetails } from '../features/submissionsDetailSlice'

const SubmissionNumber = () => {
  const dispatch = useDispatch()
  const { formid } = useParams()
  const fetchedData = useSelector((store) => store.submissionsDetail)
  useEffect(() => {
    dispatch(submissionsDetails(formid))
  }, [])
  return (
    <>
      <div className='flex p-4'>
        {
          fetchedData && fetchedData.response.map((data) => {
            return (
              <div className='mx-4 p-2 bg-gray-200 rounded flex flex-col items-center'>
                <Link to={`/values/${data._id}`}>
                  <img src="/images/doneimage.png" alt="" className='w-48 p-2' />
                  <div>Submitted By:</div>
                  <div>{data.submitter}</div>
                </Link>
              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default SubmissionNumber