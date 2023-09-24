import Patient from "./Patient"
import { useQuery } from "@tanstack/react-query"
import Loader from "../General/Loader"
import GeneralError from "../../errors/GeneralError"
import { getPatients } from "../../query-utils/queryFunctions"

const AllPatients = () => {

  const {
    data: patients,
    error,
    isError,
    isLoading,
  } = useQuery(["patients"], getPatients, {
    staleTime: 5000,
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    console.log(error)
    return <GeneralError />
  }

  return (
    <div className={`  flex flex-col gap-8`}>
      <h1 className="text-2xl">Patients</h1>
      <h1 className="text-lg text-gray-500 mb-4">
        Total Patients :{" "}
        <span className="bg-green-300 px-1 rounded-md text-green-700">
          {patients?.data?.length}
        </span>
      </h1>

      <table>
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="mt-3">
          {patients?.data?.map((item) => (
            <Patient key={item._id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default AllPatients
