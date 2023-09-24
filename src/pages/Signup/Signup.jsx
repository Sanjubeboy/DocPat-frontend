import { useState } from "react"
import logo from "../../assets/logo.svg"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { userSignup } from "../../store/auth-slice"
import { toast } from "react-toastify"

const Signup = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [passVisible, setPassVisible] = useState(false)
  const [role, setRole] = useState(null)
  const [formData, setFormData] = useState({
    name:'',
    age:'',
    specialization:'',
    email:'',
    enterPassword:'',
    confirmPassword:'',
    gender:''
  })

  const togglePassVisible = () => {
    setPassVisible((prev) => !prev)
  }

  const handleDataChange = (e) => {
    setFormData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (formData.enterPassword !== formData.confirmPassword) {
      toast.error("Password not matched!")
      return
    }

    if(!role || (role === 'patient' && !formData.gender) || (role==='doctor' && !formData.specialization)){
      toast.error('Invalid inputs!')
      return
    }

    
    const {name, age, specialization, email,gender, enterPassword} = formData
    console.log(formData)
    

    let newFormData

    if(role === 'doctor'){
      newFormData = {name, age, specialization, email, password:enterPassword}
    }
    else{
      newFormData = {name, age, sex:gender, email, password:enterPassword}
    }

    dispatch(userSignup(newFormData, role, navigate, toast))

  }

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center ">
      <form
        className="w-[40%] bg-white p-8 px-12 rounded-md flex flex-col gap-8"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-center ml-12">
          <img src={logo} className="h-28 w-full" />
        </div>

        <div className="login-div ">
          <label htmlFor="role" className="login-label">
            Register as
          </label>
          <select
            name="role"
            className="login-inp"
            onChange={(e) => setRole(e.target.value)}
            defaultValue={"DEFAULT"}
            required
          >
            <option value="DEFAULT" disabled>
              --select--
            </option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <div className="flex gap-8 justify-between">
          <div className="login-div w-1/2">
            <label htmlFor="name" className="login-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleDataChange}
              className="login-inp"
              required
            />
          </div>
          <div className="login-div w-1/2">
            <label htmlFor="age" className="login-label">
              Age
            </label>
            <input
              type="number"
              min={1}
              name="age"
              onChange={handleDataChange}
              className="login-inp"
              required
            />
          </div>
        </div>

        <div className="login-div">
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleDataChange}
            className="login-inp"
            required
          />
        </div>

        <div className="flex gap-8 justify-between">
          <div className="login-div w-1/2">
            <label htmlFor="enterPassword" className="login-label">
              Enter Password
            </label>

            <div className="relative">
              <input
                type={`${passVisible ? "text" : "password"}`}
                name="enterPassword"
                className="login-inp"
                onChange={handleDataChange}
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
          <div className="login-div w-1/2">
            <label htmlFor="confirmPassword" className="login-label">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={`${passVisible ? "text" : "password"}`}
                name="confirmPassword"
                className="login-inp"
                onChange={handleDataChange}
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
        </div>

        {role === "doctor" && (
          <div className="login-div ">
            <label htmlFor="specialization" className="login-label">
              Specialization
            </label>
            <select
              name="specialization"
              defaultValue={"DEFAULT"}
              className="login-inp"
              onChange={handleDataChange}
              required
            >
              <option value="DEFAULT" disabled>
                --select--
              </option>
              <option value="pediatrics">Pediatrics</option>
              <option value="immunology">Immunology</option>
              <option value="cardiology">Cardiology</option>
            </select>
          </div>
        )}

        {role === "patient" && (
          <div className="login-div ">
            <label htmlFor="gender" className="login-label">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={"DEFAULT"}
              className="login-inp"
              onChange={handleDataChange}
              required
            >
              <option value="DEFAULT" disabled>
                --select--
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Intersex">Intersex</option>
            </select>
          </div>
        )}

        <button type="submit" className="btn-prm mt-6">
          Sign up
        </button>
        <div className="text-center">
          Already an user?
          <Link
            to={"/login"}
            className="text-prm underline cursor-pointer ml-3"
          >
            Login here!
          </Link>
        </div>
      </form>
    </div>
  )
}
export default Signup
