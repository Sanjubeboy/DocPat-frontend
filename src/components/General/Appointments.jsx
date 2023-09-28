import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Appointment from "./Appointment"
import { useMutation } from "@tanstack/react-query"
import Loader from "./Loader"
import GeneralError from "../../errors/GeneralError"
import { getAppointments } from "../../query-utils/queryFunctions"
import { NavLink, Outlet } from "react-router-dom"
import CustomDropdown from "./CustomDropdown"

const Appointments = () => {
  const role = useSelector((state) => state.auth.role)
  const authToken = useSelector((state) => state.auth.authToken)
  const [sort, setSort] = useState("Ascending")

  const {
    mutate: ParentMutate,
    data: appData,
    error,
    isError,
    isLoading,
  } = useMutation(getAppointments)

  useEffect(() => {
    ParentMutate({ role, authToken, sort})
  }, [])

  //SortOptions methods

  

  const handleSortChange = (data) => {
    setSort(data)
    ParentMutate({role, authToken, sort:data})
  }

  const activeStyle = ({ isActive }) => {
    return isActive
      ? "text-center w-1/2 cursor-pointer border-b-2 border-b-prm text-prm py-4"
      : "text-center w-1/2 cursor-pointer py-4"
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    console.log(error)
    return <GeneralError />
  }

  if (!appData) {
    return
  }
  // console.log(appData)
  const propData = appData.data
  // return
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Your Appointments !</h1>
        <CustomDropdown varName={sort} handleVarChange={handleSortChange} optionArray={["Ascending", "Descending"]}/>
      </div>
      <h1 className="text-lg text-gray-500 mb-4">
        Total Appointments :{" "}
        <span className="bg-green-300 px-1 rounded-md text-green-700">
          {appData.data.futureAppointments.length}
        </span>
      </h1>

      <div className="flex justify-between px-2 bg-white mb-8 text-xl ">
        <NavLink to={""} end className={activeStyle}>
          Upcoming Appointments
        </NavLink>
        <NavLink to={"past"} className={activeStyle}>
          Past Appointments
        </NavLink>
      </div>

      <Outlet context={[propData, role, ParentMutate, authToken, sort]} />
    </div>
  )
}
export default Appointments
