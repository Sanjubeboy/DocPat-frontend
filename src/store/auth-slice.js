import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("isAuthenticated") === 'true' || false,
    authToken: localStorage.getItem("authToken") || null,
    role: localStorage.getItem("role") || null,
    user: localStorage.getItem("user") || null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.authToken = action.payload.data.authToken
      state.role = action.payload.role
      state.user = action.payload.data.name
    },
    signup(state, action) {},
    logout(state, action) {
      ;(state.isAuthenticated = false),
        (state.authToken = null),
        (state.role = null),
        (state.user = null)
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('authToken')
        localStorage.removeItem('role')
        localStorage.removeItem('user')
    },
  },
})

export const userLogin = ({username, password, role}, navigate, toast) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/${role}/login`,
        {
          email: username,
          password,
        }
      )
      // console.log(res)
      dispatch(authActions.login({data:res.data, role}))
      localStorage.setItem('authToken', res.data.authToken)
      localStorage.setItem('role', role)
      localStorage.setItem('isAuthenticated', true)
      localStorage.setItem('user', res.data.name)
      navigate(`/${role}/dashboard`)
      toast.success('Login successful')
    } catch (error) {
      // console.log(error)
      toast.error('Authentication failed')
    }
  }
}

export const userSignup = (formBody, role, navigate, toast) => {
    return async(dispatch) => {
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/${role}/signup`,
            formBody
          )
          console.log(res)
          toast.success('Signup successful!')
          navigate('/login')

        } catch (error) {
          console.log(error)
          toast.error("Failed to sign up")
        }
    }
}

export const authActions = authSlice.actions
export default authSlice
