import { IMAGE_BASE_URL } from "../../ep5/utils/const";

export default MenuCardComponent = ({ menuItem }) => {
    // ratings: { aggregatedRating: { rating } }
    console.log(menuItem);
    const { name, description, imageId } = menuItem;
    return <div className="py-5 px-10 flex justify-between">
        <div>
            <h3 className="text-2xl">{name}</h3>
            <p className="mt-2">{description}</p>
        </div>
        <img className="w-36 h-36 object-cover rounded-xl" src={IMAGE_BASE_URL + imageId} alt={name} />
    </div>
}