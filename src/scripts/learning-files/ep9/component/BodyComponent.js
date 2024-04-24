import useRestroList from "../hooks/useRestroList"

import CategoryBody from "../../ep6/component/CategoryBody";
import RestCardBody from "../../ep6/component/RestCardBody";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default BodyComponent = () => {

    const [restroData, categoryData] = useRestroList();
    const userState = useOnlineStatus();

    console.log([restroData, categoryData]);
    return !userState ? <h1>Looks like you'r offline</h1> :
        <div className='px-20 py-2'>
            <div>
                <CategoryBody categoryData={categoryData} />
                <div className="" />
                <RestCardBody restroData={restroData} />
            </div>
        </div >


}