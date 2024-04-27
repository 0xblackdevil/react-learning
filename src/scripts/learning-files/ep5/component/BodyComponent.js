import RestroCard from "./RestroCard";
import { RESTRO_DATA } from "../utils/mockData";
import { useState } from "react";



export default BodyComponent = () => {
    // local state variable to store the restaurant data
    // it keep the sync with the data and the UI

    /**
     * we use array destructuring to get the current state and the function to update the state
     */
    const [restroData, setRestroData] = useState(RESTRO_DATA);
    const [searchData, setSearchData] = useState("");
    return (
        <div className='body'>
            <div className="action-btn">
                <div className='searchbox'>
                    <input placeholder='Search for cusine' value={searchData} onChange={e => setSearchData(e.target.value)} />
                </div>
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => setRestroData(RESTRO_DATA.filter((restro) => restro.info.avgRating > 4.3))}
                    >
                        Filter
                    </button>
                </div>
            </div>
            <div className='res-container'>
                {restroData.map(restaurant => <RestroCard data={restaurant} key={restaurant.info.resId} />)}
            </div>
        </div >
    )
}
