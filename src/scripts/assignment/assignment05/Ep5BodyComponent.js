
import RestroCard from "../../learning-files/ep5/component/RestroCard";
import { RESTRO_DATA } from "../../learning-files/ep5/utils/mockData";
import { useState } from "react";



export default Ep5BodyComponent = () => {
    /**
     * we search cusine in the restaurant data
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
                        onClick={() => {
                            const result = RESTRO_DATA.reduce((acc, curr) => {
                                curr.info.cuisines.map(c => {
                                    if (c.name === searchData) {
                                        acc.push(curr);
                                    }
                                });

                                return acc;
                            }, []);

                            setRestroData(result)
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className='res-container'>
                {restroData.map(restaurant => <RestroCard data={restaurant} key={restaurant.info.resId} />)}
            </div>
        </div >
    )
}