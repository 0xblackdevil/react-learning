
import { useParams } from "react-router-dom";
import useRestMenu from "../../hooks/useRestMenu";
import RestroDetail from "./RestroDetail";
import RestroMenu from "./RestroMenu";

export default RestroMenu = () => {

    const { id } = useParams();
    const [restroState, restroMenu] = useRestMenu(id);

    return <div className="restro-menu-container">
        <RestroDetail _restroDetail={restroState} />
        <RestroMenu _menuObject={restroMenu} />
    </div>
}