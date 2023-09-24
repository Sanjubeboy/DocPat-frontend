import { useSelector } from "react-redux"
import Unauthorized from "../errors/Unauthorized"

const ProtectPatientLayout = ({children}) => {
  const role = useSelector((state) => state.auth.role)

  if (role === "doctor") {
    return <Unauthorized/>
  }

  return <div>{children}</div>
}
export default ProtectPatientLayout