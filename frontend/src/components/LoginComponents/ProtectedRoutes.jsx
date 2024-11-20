import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ProtectedRoute = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(!checkToken()) {
            return navigate('/login')
        }
    })

    const checkToken = () => {
        let jwt = document.cookie.includes('jwt')
        return jwt
    }
    
    return <Outlet />
}

export default ProtectedRoute