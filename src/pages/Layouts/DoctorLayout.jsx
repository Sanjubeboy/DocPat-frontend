import { Outlet } from "react-router-dom"
import AllPatients from "../../components/Doctors/AllPatients"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useGlobalContext } from "../../context/GlobalContextWrapper"

const DoctorLayout = () => {

    const {isSideBarOpen} = useGlobalContext()

  return (
    <div>
      <Sidebar />
      <div
        className={`px-12 py-16 min-h-screen bg-[#F5F6FA] pb-16 ${
          isSideBarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>
  )
}
export default DoctorLayout
