
import { useParams } from "react-router-dom";
import useRestMenu from "../hooks/useRestMenu";
import RestroDetail from "../../ep7/component/RestroMenu/RestroDetail";
import RestroMenu from "../../ep7/component/RestroMenu/RestroMenu";

export default RestroMenu = () => {

    const { id } = useParams();
    const [restroState, restroMenu] = useRestMenu(id);

    return <div className=" px-64">
        <RestroDetail _restroDetail={restroState} />
        <RestroMenu _menuObject={restroMenu} />
    </div>
}