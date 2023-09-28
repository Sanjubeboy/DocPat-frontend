import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useGlobalContext } from "../../context/GlobalContextWrapper"

const DoctorLayout = () => {

    const {isSideBarOpen} = useGlobalContext()

  return (
    <div>
      <Sidebar />
      <div
        className={`px-12 py-16 min-h-screen mt-[73px] bg-[#F5F6FA] pb-16 ${
          isSideBarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>
  )
}
export default DoctorLayout
