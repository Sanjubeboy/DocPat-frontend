import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const HandleDefault = () => {

    const isAuth = useSelector(state => state.auth.isAuthenticated)
    const role = useSelector(state => state.auth.role)

    if(!isAuth){
        return <Navigate to={'/login'}/>
    }
    else{
        return <Navigate to={`/${role}/dashboard`}/>
    }
  
}
export default HandleDefault