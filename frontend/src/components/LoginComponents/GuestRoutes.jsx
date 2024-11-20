import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const GuestRoutes = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(checkToken()) {
            return navigate('/')
        }
    })

    const checkToken = () => {
        let jwt = document.cookie.includes('jwt')
        return jwt
    }
    return <Outlet />
}

export default GuestRoutes