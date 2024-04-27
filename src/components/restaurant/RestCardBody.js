import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default RestCardBody = ({ restroData }) => {

    /**
     * This condition will check if the data is available or not
     * It's called as conditional rendering 
     */
    return restroData.length === 0 ? <Shimmer /> : (

        <div className='grid grid-cols-4 gap-5 px-20'>
            {restroData.map(restaurant => {
                return <Link to={"/restorants/" + restaurant.info.id} key={restaurant.info.id}>
                    <RestroCard data={restaurant} key={restaurant.info.id} />
                </Link>
            })}
        </div>

    );
}