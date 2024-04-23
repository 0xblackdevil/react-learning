import RestroCard from "../../ep5/component/RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default RestCardBody = ({ restroData }) => {

    /**
     * This condition will check if the data is available or not
     * It's called as conditional rendering 
     */
    return restroData.length === 0 ? <Shimmer /> : (

        <div className='res-container'>
            {restroData.map(restaurant => <Link to={"/restorants/" + restaurant.info.id} className="card-link" key={restaurant.info.id}><RestroCard data={restaurant} key={restaurant.info.id} /></Link>)}
        </div>

    );
}