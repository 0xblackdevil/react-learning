import { IMAGE_BASE_URL } from "../../../ep5/utils/const";

export default MenuPage = ({ _menuObject }) => {
    return <div className="menu-page">
        {_menuObject?.map((menu, index) => {
            if (menu?.card?.card?.itemCards) {
                const { title, itemCards } = menu?.card?.card;
                return <div key={index}>
                    <h2 className="menu-title">{title} ({itemCards.length})</h2>
                    {itemCards.map(item => {
                        const { id, name, price, ratings, description, imageId } = item?.card?.info;
                        return <div key={id}>
                            <div className="item-card" >
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
                                <div className="item-img-container">
                                    {imageId && <img src={IMAGE_BASE_URL + imageId} alt={name} />}
                                    <button>ADD</button>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                    }
                    )}

                </div>
            }
        })}

    </div>
}