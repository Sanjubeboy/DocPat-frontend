import React from "react"
import { useGlobalContext } from "../../context/GlobalContextWrapper"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import {RxDashboard} from 'react-icons/rx'

const Sidebar = () => {

    const {isSideBarOpen} = useGlobalContext()
    const role = useSelector(state => state.auth.role)

    const NavActive = ({isActive}) => {
      return isActive
        ? "mb-2 px-4 py-4 flex flex-row  border-gray-300 rounded-lg font-bold bg-gray-300 text-black"
        : "mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 rounded-lg hover:font-bold hover:bg-gray-300 hover:text-black"
    }

  return (
    <div>
      <nav
        className={`flex flex-col justify-between pb-16 bg-prm  bottom-0  tex-gray-900  fixed top-[73px] left-0  ${
          isSideBarOpen
            ? "w-64 px-4 border border-prm"
            : "w-[0px] overflow-hidden"
        } transition-all duration-300`}
      >
        <div className="mt-10 mb-4">
          <ul className="ml-4">
            <NavLink className={NavActive} to={"dashboard"}>
              <span>
                <RxDashboard className="w-6 h-6" />
              </span>
              <div>
                <span className="ml-2">Dashboard</span>
              </div>
            </NavLink>
            {role === "doctor" && (
              <NavLink className={NavActive} to={"allpatients"}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="ml-2">Patients</span>
                </div>
              </NavLink>
            )}
            <NavLink className={NavActive} to={"alldoctors"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </span>
              <div>
                <span className="ml-2">Doctors</span>
              </div>
            </NavLink>
            <NavLink className={NavActive} to={"appointments"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </span>
              <div>
                <span className="ml-2">Appointments</span>
              </div>
            </NavLink>
          </ul>
        </div>
        {isSideBarOpen && (
          <footer className="flex flex-col items-center text-gray-200">
            <h1 className="capitalize text-xl">{role}</h1>
            <h1>&copy; Copyrights 2023</h1>
          </footer>
        )}
      </nav>
    </div>
  )
}

export default Sidebar
