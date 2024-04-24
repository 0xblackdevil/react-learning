import HeaderComponent from "./component/HeaderComponent"
import { Outlet } from "react-router-dom"

export default AppLayout = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}