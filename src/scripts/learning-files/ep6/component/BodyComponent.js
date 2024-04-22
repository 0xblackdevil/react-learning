
import { useEffect, useState } from "react";

import "../master.scss";
import RestCardBody from "./RestCardBody";



export default BodyComponent = () => {
    /**
©     * useEffect() takes 2 arguments
     *  1. Callback function
     *  2. Dependency array
     * 
     * useEffect callback function will be executed after the component is rendered
     * 
     * optional channing | Shimmer ui
     */
    const [restroData, setRestroData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        fatchData();
    }, []);

    const fatchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();
            setRestroData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (e) {
            return e;
        }
    }

    return (
        <div className='body'>
            <div className="action-btn">
                <div className='searchbox'>
                    <input placeholder='Search for cusine' value={searchData} onChange={e => setSearchData(e.target.value)} />
                </div>
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            // const result = RESTRO_DATA.reduce((acc, curr) => {
                            //     curr.info.cuisines.map(c => {
                            //         if (c === searchData) {
                            //             acc.push(curr);
                            //         }
                            //     });

                            //     return acc;
                            // }, []);

                            const result = restroData.filter(res => res.info.name.toLowerCase().includes(searchData.toLowerCase()));

                            setFilterData(result)
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            {/* <div className='res-container'>
                {restroData.map(restaurant => <RestroCard data={restaurant} key={restaurant.info.id} />)}
            </div> */}
            <RestCardBody restroData={filterData} />
        </div >
    )
}