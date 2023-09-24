import { useSelector } from "react-redux"
import Unauthorized from "../errors/Unauthorized"

const ProtectDoctorLayout = ({children}) => {

    const role = useSelector(state => state.auth.role)

    if(role === 'patient'){
        return <Unauthorized/>
    }

  return (
    <div>{children}</div>
  )
}
export default ProtectDoctorLayout