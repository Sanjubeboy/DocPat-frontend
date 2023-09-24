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
    <tr className="relative">
      <td className="capitalize">{name}</td>
      <td>{age}</td>
      <td className="capitalize">{specialization}</td>
      <td>
        <span className="bg-green-300 px-2 rounded-full py-[2px] text-green-700">
          active
        </span>
      </td>
      <td className="absolute right-0 text-sm border-none top-[2px] cursor-pointer">
        <h1 onClick={handleNavigate} className="text-blue-500 underline hover:text-purple-900">{userRole === 'patient'?'Book':'View'}</h1>
      </td>
    </tr>
  )
}
export default Doctor