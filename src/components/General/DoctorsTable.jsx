import GeneralError from "../../errors/GeneralError"
import Doctor from "./Doctor"
import Loader from "./Loader"

const DoctorsTable = ({ doctors, isLoading, isError }) => {
  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    // console.log(error)
    return <GeneralError />
  }
//   console.log(doctors)
  return (
    <>
      <h1 className="text-lg text-gray-500 mb-4">
        Total Doctors :{" "}
        <span className="bg-green-300 px-1 rounded-md text-green-700">
          {doctors?.data?.length}
        </span>
      </h1>

      <table>
        <thead className="sticky top-[78px] z-40">
          <tr className="table-head">
            <th>Name</th>
            <th>Age</th>
            <th>Specialization</th>
            <th colSpan={4}>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="mt-3">
          {doctors?.data?.map((item) => (
            <Doctor key={item._id} {...item} />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default DoctorsTable
