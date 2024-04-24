import { IMAGE_BASE_URL } from "../../../ep5/utils/const";

export default MenuPage = ({ _menuObject }) => {
    return <div >
        {_menuObject?.map((menu, index) => {
            if (menu?.card?.card?.itemCards) {
                const { title, itemCards } = menu?.card?.card;
                return <div key={index} className="mt-10">
                    <h2 className=" font-bold text-2xl">{title} ({itemCards.length})</h2>
                    <div className="flex flex-col gap-10">
                        {itemCards.map(item => {
                            const { id, name, price, ratings, description, imageId } = item?.card?.info;
                            return <div key={id}>
                                <div className="my-5 flex gap-14 justify-between items-center" >
                                    <div className="item-details">
                                        <div>
                                            <h3>{name}</h3>
                                            <p>₹{price / 100}</p>
                                        </div>
                                        <div>
                                            <p className="rating"><span>{ratings.aggregatedRating.rating}</span> ({ratings.aggregatedRating.ratingCountV2}) </p>
                                        </div>
                                        <div>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <div className="relative w-36 h-32">
                                        {imageId && <div className=""><img className=" object-cover rounded-xl" src={IMAGE_BASE_URL + imageId} alt={name} /></div>}
                                        <button className="absolute bg-white border border-[#f2f2f2] px-10 py-1 bottom-0 right-3 rounded-lg">ADD</button>
                                    </div>
                                </div>
                            </div>
                        }
                        )}
                    </div>

                </div>
            }
        })}

    </div>
}