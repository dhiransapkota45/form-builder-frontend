import React, { useState } from 'react'
import { GrClose } from "react-icons/gr"
import { closeModal } from '../features/modalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { updatefield } from '../features/formSlice'

const Modal = () => {
    const modal = useSelector((store) => store.modal)

    const form = useSelector((store) => store.form)

    const fieldname = form.formfields[modal.index].fieldname

    const dispatch = useDispatch()
    const [updateField, setUpdateField] = useState({
        fieldname: fieldname,
        required: form.formfields[modal.index].required
    })
    return (
        <div className=' fixed w-full h-screen bg-black bg-opacity-25 flex justify-center items-center'>
            <div className='rounded p-4 bg-white text-black w-2/5'>
                <div className='flex justify-between'>
                    <div className=' text-lg text-gray-500'>Edit Field</div>
                    <button onClick={() => dispatch(closeModal())} className='rounded-3xl p-2 hover:bg-gray-300'><GrClose className='' /></button>
                </div>
                <hr className='mt-3 mb-6' />
                <div className='my-6'>

                    <input onChange={e => setUpdateField({ ...updateField, fieldname: e.target.value })} value={updateField.fieldname} type="text" className='w-full border rounded p-2 text-black' placeholder='field name' />
                </div>
                <div>
                    <input type="checkbox" value="required" checked={updateField.required} onChange={() => setUpdateField({ ...updateField, required: !updateField.required })} name="" id="" className='mr-4' />
                    <span>Required</span>
                </div>
                <div className=' text-right mt-6'>
                    <button onClick={() => dispatch(updatefield({ field: updateField, index: modal.index }))} className='p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400'>Update</button>
                </div>
            </div>
        </div>

    )
}

export default Modal