import useRestroList from "../../ep9/hooks/useRestroList"

import CategoryBody from "../../ep6/component/CategoryBody";
import RestCardBody from "./RestroCardBody"
import useOnlineStatus from "../../ep9/hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default BodyComponent = () => {

    const [restroData, categoryData] = useRestroList();
    const userState = useOnlineStatus();

    const { loggedInUser, setUser } = useContext(UserContext);


    return !userState ? <h1>Looks like you'r offline</h1> :
        <div className='px-20 py-2'>
            <div>
                <h1>Hello, {loggedInUser}</h1>
                <input type="text" placeholder="change user name" value={loggedInUser} onChange={(e) => setUser(e.target.value)} />
                <CategoryBody categoryData={categoryData} />
                <div className="" />
                <RestCardBody restroData={restroData} />
            </div>
        </div >


}