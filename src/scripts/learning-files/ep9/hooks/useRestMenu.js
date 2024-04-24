import { useEffect, useState } from "react";
import { FATCH_RESTRO_MENU_API } from "../../ep5/utils/const";

export default useRestMenu = (id) => {

    const [restroState, setRestroState] = useState({});
    const [restroMenu, setRestroMenu] = useState([]);

    useEffect(() => {
        FetchRestroMenu();
    }, []);

    const FetchRestroMenu = async () => {
        try {
            const result = await fetch(FATCH_RESTRO_MENU_API + id)
            const json = await result.json();
            setRestroState(json.data?.cards[2]?.card?.card?.info);
            setRestroMenu(json.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        } catch (e) {
            return e;
        }
    }

    console.log(restroState, restroMenu);
    return [restroState, restroMenu];
}