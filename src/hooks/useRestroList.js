import { useEffect, useState } from "react";
import { FATCH_RESTRO_LIST } from "../utils/const";

export default useRestroList = () => {

    const [restroData, setRestroData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fatchData();
    }, []);

    const fatchData = async () => {
        try {
            const data = await fetch(FATCH_RESTRO_LIST);
            const json = await data.json();

            setRestroData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setCategoryData(json?.data.cards[0].card.card);
        } catch (e) {
            return e;
        }
    }

    return [restroData, categoryData];

}