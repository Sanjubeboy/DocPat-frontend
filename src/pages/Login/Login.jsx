import { useState } from "react"
import logo from "../../assets/logo.svg"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import {userLogin } from "../../store/auth-slice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

const Login = () => {
  const [passVisible, setPassVisible] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  })

  const onDataChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const togglePassVisible = () => {
    setPassVisible((prev) => !prev)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!formData.role) {
      toast.error("Enter valid role")
      return
    }
    // console.log(formData)
    dispatch(userLogin(formData, navigate, toast))
    
  }

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center ">
      <form
        className="w-1/3 bg-white p-8 px-12 rounded-md flex flex-col gap-8"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-center ml-12">
          <img src={logo} className="h-28 w-full" />
        </div>
        <div className="login-div">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="login-inp"
            onChange={onDataChange}
            required
          />
        </div>
        <div className="login-div">
          <label htmlFor="password" className="login-label">
            Password
          </label>

          <div className="relative">
            <input
              type={`${passVisible ? "text" : "password"}`}
              name="password"
              className="login-inp"
              onChange={onDataChange}
              required
            />
            <div
              className="absolute right-0 top-4 "
              onClick={togglePassVisible}
            >
              {passVisible ? (
                <AiFillEyeInvisible className="text-2xl cursor-pointer" />
              ) : (
                <AiFillEye className="text-2xl cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        <div className="login-div">
          <label htmlFor="role" className="login-label">
            Login as
          </label>
          <select
            name="role"
            defaultValue={"DEFAULT"}
            className="login-inp"
            onChange={onDataChange}
            required
          >
            <option value="DEFAULT" disabled>
              --select--
            </option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <button type="submit" className="btn-prm mt-6">
          Login
        </button>
        <div className="text-center">
          New user?{" "}
          <Link
            to={"/register"}
            className="text-prm underline cursor-pointer ml-2"
          >
            Register here!
          </Link>
        </div>
      </form>
    </div>
  )
}
export default Login
