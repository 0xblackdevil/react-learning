import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestroDetail from "./RestroDetail";
import MenuPage from "./RestroMenu";
import { FATCH_RESTRO_MENU_API } from "../../../ep5/utils/const";

export default RestroMenu = () => {

    const { id } = useParams();

    const [restroDetail, setRestroDetail] = useState(null);
    const [restroState, setRestroState] = useState({});
    const [restroMenu, setRestroMenu] = useState([]);

    useEffect(() => {
        FetchRestroMenu();
    }, []);

    const FetchRestroMenu = async () => {
        try {
            const result = await fetch(FATCH_RESTRO_MENU_API + id)
            const json = await result.json();
            setRestroDetail(json);
            setRestroState(json.data?.cards[2]?.card?.card?.info);
            setRestroMenu(json.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        } catch (e) {
            return e;
        }
    }

    return <div className="restro-menu-container">
        <RestroDetail _restroDetail={restroState} />
        <MenuPage _menuObject={restroMenu} />
    </div>
}