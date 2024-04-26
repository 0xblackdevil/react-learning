import { useState } from "react";
import ItemCard, { NextAvailItem, CartButton } from "./ItemCard";

export default MenuContainer = ({ section, showItems, setIndex }) => {

    const NextAvailItemCard = NextAvailItem(ItemCard);
    const CartButtonItemCard = CartButton(ItemCard);

    const { title, itemCards } = section.card.card;

    return <div className="my-5 bg-white">
        <div className="flex justify-between items-center shadow-lg  p-3 rounded-lg cursor-pointer" onClick={() => setIndex()}>
            <h1 className="text-lg font-bold">{title} ({itemCards.length})</h1>
            <h3 className="text-lg">⬇️</h3>
        </div>

        {showItems && itemCards.map(item => {
            { return item.card.info.nextAvailableAtMessage ? <NextAvailItemCard key={item.card.info.id} item={item} /> : <CartButtonItemCard key={item.card.info.id} item={item} /> }
        })}

    </div>




}