import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { signupUser } from "../features/userloginSlice"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


export default function Signup() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const {success} = useSelector((store) => store.userlogin)
  useEffect(() => {
    if (success) {
      navigate("/")
    }
  }, [success])

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(signupUser(user))
  }
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
              Sign in to your account
            </h2>

          </div>
          <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  onChange={onChangeHandler}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={onChangeHandler}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={onChangeHandler}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="cpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  onChange={onChangeHandler}
                  id="cpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                
              </div>

              <div className="text-sm">
                <Link to="/login" href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Login here
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
