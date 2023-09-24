import { Link } from "react-router-dom"

const Patient = ({_id, age, sex, name}) => {
  return (
    <tr className="relative">
      <td className="capitalize">{name}</td>
      <td>{age}</td>
      <td>{sex}</td>
      <td>
        <span className="bg-green-300 px-2 rounded-full py-[2px] text-green-700">
          active
        </span>
      </td>
      <td className="absolute right-0 text-sm border-none top-[2px] cursor-pointer">
        <Link to={`${_id}/?role=patient`} className="text-blue-500 underline">view</Link>
      </td>
    </tr>
  )
}
export default Patient