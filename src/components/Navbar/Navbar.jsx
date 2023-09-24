import { GiHamburgerMenu } from "react-icons/gi"
import { BiLogOut } from "react-icons/bi"
import {BsBoxArrowLeft} from 'react-icons/bs'
import logo from "../../assets/logo.svg"
import defaultProfile from "../../assets/default-profile.png"
import { useGlobalContext } from "../../context/GlobalContextWrapper"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../store/auth-slice"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const { isSideBarOpen, toggleSidebar } = useGlobalContext()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(state => state.auth.user)
  // const isAuth = useSelector(state => state.auth.isAuthenticated)
  // console.log(isAuth)

  const handleLogout = () => {
    dispatch(authActions.logout())
    navigate('/login')
  }

  return (
    <div
      className={`px-4 flex justify-between items-center border-b-[1px] z-30 sticky top-0 right-0 left-0 bg-white`}
    >
      <div className="flex items-center gap-2">
        {isSideBarOpen ? (
          <BsBoxArrowLeft
            onClick={() => toggleSidebar()}
            className={`w-8 h-8 cursor-pointer mt-1`}
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => toggleSidebar()}
            className={`w-8 h-8 cursor-pointer ${
              isSideBarOpen ? "rotate-90" : ""
            } transition-all duration-150 cursor-pointer`}
          />
        )}

        <img src={logo} className="h-20 w-60 -mt-2 cursor-pointer" />
      </div>

      <ul className="flex items-center gap-8">
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600"
          >
            logout
            <span>
              <BiLogOut />
            </span>
          </button>
        </li>
        <li className="text-xl text-prm cursor-pointer capitalize">
          {userName}
        </li>
        <li>
          <img
            src={defaultProfile}
            className="h-12 w-12 object-cover rounded-full  border-[1px] cursor-pointer"
          />
        </li>
      </ul>
    </div>
  )
}
export default Navbar
