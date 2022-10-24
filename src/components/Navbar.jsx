import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/userloginSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
        navigate("/login")  
    }
    return (
        <div className='flex justify-around p-4 border-b-2'>
            <div className=' font-bold text-xl'>Form-Builder</div>
            <Link to="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                Create Form

            </Link>
            <button onClick={logoutHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
        </div>
    )
}

export default Navbar