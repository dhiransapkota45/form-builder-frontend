import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../features/userloginSlice"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  const navaigate = useNavigate()
  const userdetails = useSelector((store) => store.userlogin)
  const dispatch = useDispatch()
  const onsubmitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser(user))
  }

  useEffect(()=>{
    if(userdetails.success){
      navaigate("/")
    }
  }, [userdetails.success])


  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 shadow-lg p-4 rounded">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/images/login.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>

          </div>
          <form onSubmit={onsubmitHandler} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={onChangeHandler}
                  value={user.email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={onChangeHandler}
                  value={user.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">

              </div>

              <div className="text-sm">
                <Link to="/signup" href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Dont have an account? Signup here
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
