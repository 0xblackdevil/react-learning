import { Provider } from "react-redux"
import HeaderComponent from "./components/HeaderComponent"
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";

export default AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className='app'>
                <HeaderComponent />
                <Outlet />
            </div>
        </Provider>
    )
}