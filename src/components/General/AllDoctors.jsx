import { useEffect, useState } from "react"
import Doctor from "./Doctor"
import { useSelector } from "react-redux"
import { useMutation } from "@tanstack/react-query"
import Loader from "./Loader"
import GeneralError from "../../errors/GeneralError"
import { getDoctors } from "../../query-utils/queryFunctions"

const AllDoctors = () => {
  const authToken = useSelector((state) => state.auth.authToken)

  const {
    mutate,
    data: doctors,
    error,
    isError,
    isLoading,
  } = useMutation(getDoctors)

  useEffect(() => {
    mutate({ body: {}, authToken })
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    console.log(error)
    return <GeneralError />
  }

  return (
    <div className={`  flex flex-col gap-8`}>
      <h1 className="text-2xl">Doctors</h1>
      <h1 className="text-lg text-gray-500 mb-4">
        Total Doctors :{" "}
        <span className="bg-green-300 px-1 rounded-md text-green-700">
          {doctors?.data?.length}
        </span>
      </h1>

      <table>
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Age</th>
            <th>Specialization</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="mt-3">
          {doctors?.data?.map((item) => (
            <Doctor key={item._id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default AllDoctors
