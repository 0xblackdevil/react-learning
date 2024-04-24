import { IMAGE_BASE_URL } from "../../utils/const";

export default RestroCard = ({ data }) => {
    const { cloudinaryImageId, name, avgRating, cuisines, sla: { slaString }, costForTwo } = data.info;

    return (<div className='restro-card'>
        <img src={IMAGE_BASE_URL + cloudinaryImageId} alt='restro-image' />
        <div className='restro-detail'>
            <div className='flex-box'>
                <h2 className='name'>{name}</h2>
                <h5 className='rating'>{avgRating} ⭐️</h5>
            </div>
            <div className='flex-box'>
                <ul className='cusine'>
                    {cuisines.map(
                        (cusine, index) => <li key={index} >{cusine}</li>
                    )}
                </ul>
                <div className="sla-container">
                    <h5 className='avg-price'>{costForTwo}</h5>
                    <h5 className='esti-time'>{slaString}</h5>
                </div>
            </div>
        </div>
    </div>)
}
