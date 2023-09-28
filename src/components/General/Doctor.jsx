import { useSelector } from "react-redux"
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom"

const Doctor = ({_id,name, age, specialization}) => {
    // const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const userRole = useSelector(state => state.auth.role)

    const handleNavigate = () => {
        navigate(`${_id}/?role=doctor`)
    }

  return (
    <tr >
      <td className="capitalize">{name}</td>
      <td>{age}</td>
      <td className="capitalize">{specialization}</td>
      <td colSpan={4}>
        <span className="bg-green-300 px-2 rounded-full py-[2px] text-green-700">
          active
        </span>
      </td>
      <td className="justify-center text-sm  cursor-pointer flex gap-16 items-center mt-1">
        <h1
          onClick={handleNavigate}
          className="text-blue-500 underline hover:text-purple-900"
        >
          View
        </h1>
        {userRole === "patient" && (
          <h1
            onClick={() => navigate(`/patient/bookappointment/${_id}`)}
            className="text-blue-500 underline hover:text-purple-900"
          >
            Book
          </h1>
        )}
      </td>
    </tr>
  )
}
export default Doctor