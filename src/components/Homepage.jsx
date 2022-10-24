import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import Form from './Form'
import { useSelector, useDispatch } from 'react-redux'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { loadFormDetails } from '../features/homepageSlice'
import FormBody from './FormBody'
import FormSubmit from './FormSubmit'
import SubmissionNumber from './SubmissionNumber'
import SubmitDetails from './SubmitDetails'

const Homepage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem("userid")) {
      navigate("/login")
    }
}, [])

  useEffect(() => {
    dispatch(loadFormDetails(localStorage.getItem("userid")))
  }, [])


  const modal = useSelector((store) => store.modal.modal)
  return (
    <div>
      {
        modal && <Modal />
      }
      <Navbar />
      <Routes>
        <Route path='' element={<FormBody />} />
        <Route path='create' element={<Form />} />
        <Route path="form/:formid/submission" element={<FormSubmit />} />
        <Route path="submission/:formid" element={<SubmissionNumber />} />
        <Route path="values/:submissionid" element={<SubmitDetails />} />
      </Routes>

    </div>
  )
}

export default Homepage