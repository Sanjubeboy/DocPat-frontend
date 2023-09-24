import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Appointment from "./Appointment"
import { useMutation } from "@tanstack/react-query"
import Loader from "./Loader"
import GeneralError from "../../errors/GeneralError"
import { getAppointments } from "../../query-utils/queryFunctions"


const Appointments = () => {
  const role = useSelector((state) => state.auth.role)
  const authToken = useSelector((state) => state.auth.authToken)

  const {
    mutate,
    data: appData,
    error,
    isError,
    isLoading,
  } = useMutation(getAppointments)

  useEffect(() => {
    mutate({ role, authToken })
  }, [])

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

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl">Your Appointments !</h1>
      <h1 className="text-lg text-gray-500 mb-4">
        Total Appointments :{" "}
        <span className="bg-green-300 px-1 rounded-md text-green-700">
          {appData.data.length}
        </span>
      </h1>

      <div className="grid grid-cols-4 bg-prm text-white font-semibold p-3 px-4 rounded-md sticky top-[74px]">
        <h1>{role === "doctor" ? "Patient Name" : "Doctor Name"}</h1>
        <h1>Date</h1>
        <h1>Time</h1>
        <h1></h1>
      </div>

      <div className="flex flex-col gap-1">
        {appData?.data?.map((item) => (
          <Appointment key={item._id} {...item} role={role} />
        ))}
      </div>
    </div>
  )
}
export default Appointments
