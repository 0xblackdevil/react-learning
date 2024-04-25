import RestroCard, { SpacialDiscountedCard } from "../../ep5/component/RestroCard";
import Shimmer from "../../ep6/component/Shimmer";
import { Link } from "react-router-dom";

export default RestCardBody = ({ restroData }) => {

    /**
     * This condition will check if the data is available or not
     * It's called as conditional rendering 
     */

    const DiscountCard = SpacialDiscountedCard(RestroCard)

    return restroData.length === 0 ? <Shimmer /> : (
        <div className='grid grid-cols-4 gap-5'>
            {restroData.map(restaurant => {
                return <Link to={"/restorants/" + restaurant.info.id} key={restaurant.info.id}>
                    {/* if restro has a specila discount then show it on image */}

                    {!restaurant.info.isOpen ? <DiscountCard data={restaurant} open={restaurant.info.isOpen} /> : <RestroCard data={restaurant} key={restaurant.info.id} />}

                </Link>
            })}
        </div>
    );
}