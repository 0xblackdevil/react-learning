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

            const rawArr = json.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
            const menu = rawArr.filter(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            setRestroMenu(menu);

        } catch (e) {
            return e;
        }
    }
    return [restroState, restroMenu];
}