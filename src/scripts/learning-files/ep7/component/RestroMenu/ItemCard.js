import { useDispatch } from "react-redux";
import { IMAGE_BASE_URL } from "../../../ep5/utils/const";
import { addItems } from "../../../ep12/utils/cartSlice";
export default ItemCard = ({ item, notAvail }) => {
    console.log(item);
    const { id, name, description, imageId, price, defaultPrice } = item.card.info;

    return <div className="py-5 flex justify-between gap-5" key={id}>
        <div>
            <h3 className="text-lg">{name}</h3>
            <h3 className="text-lg">₹{price / 100 || defaultPrice / 100}</h3>
            <p className="mt-2 w-3/4">{description}</p>
        </div>
        {imageId && <img className={`w-36 h-36 object-cover rounded-xl ${notAvail && grayscale}`} src={IMAGE_BASE_URL + imageId} alt={name} />}
    </div>
}

export const NextAvailItem = (ItemCard) => {
    return (props) => {
        return <div className="relative">
            <h1 className="text-sm font-bold absolute right-0 bottom-12 bg-white p-2">Next Available Item</h1>
            <ItemCard item={props.item} notAvail={false} />
        </div>
    }
}

export const CartButton = (ItemCard) => {
    return (props) => {

        const dispatch = useDispatch();

        const handleAddButton = () => {
            dispatch(addItems(props.item));
        }
        return <div className="relative">
            <button
                className="text-sm font-bold absolute py-2 px-10 right-5 bottom-0 bg-white  text-green-500 shadow-2xl rounded-xl"
                onClick={() => handleAddButton()}>+ Add</button>
            <ItemCard item={props.item} />
        </div>
    }
}