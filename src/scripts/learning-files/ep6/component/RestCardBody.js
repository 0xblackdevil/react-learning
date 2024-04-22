import RestroCard from "../../ep5/component/RestroCard";
import Shimmer from "./Shimmer";

export default RestCardBody = ({ restroData }) => {

    if (restroData.length === 0) {
        return <Shimmer />
    }

    return (
        <div className='res-container'>
            {restroData.map(restaurant => <RestroCard data={restaurant} key={restaurant.info.id} />)}
        </div>
    );
}