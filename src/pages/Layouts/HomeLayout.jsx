import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const HomeLayout = () => {


  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default HomeLayout
