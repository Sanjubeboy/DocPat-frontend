import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({children}) => {

    const isAuth = useSelector(state => state.auth.isAuthenticated)

    if(!isAuth){
        return <Navigate to={'/login'} replace/>
    }

  return (
    <div>
        {children}
    </div>
  )
}
export default ProtectedRoutes