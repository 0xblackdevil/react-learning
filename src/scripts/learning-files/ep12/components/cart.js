import { useDispatch, useSelector } from "react-redux"
import ItemCard from "../../ep7/component/RestroMenu/ItemCard";
import { clearCart } from "../utils/cartSlice";

export default CartPage = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="px-40 py-10">
        <div className="flex gap-5">
            <h1 className="text-2xl font-bold">Cart ({cartItems.length})</h1>
            {cartItems.length > 0 && <button className="px-8 py-2 bg-white border border-black rounded-full" onClick={handleClearCart}>Clear Cart</button>}
        </div>
        <div>
            {cartItems.length === 0 ? <h1 className="text-2xl text-center font-bold">Nothing is here...</h1> : cartItems.map(item => <ItemCard item={item} notAvail={false} key={item.card.info.id} />)}
        </div>
    </div>
}