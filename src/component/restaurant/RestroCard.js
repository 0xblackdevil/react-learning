import { IMAGE_BASE_URL } from "../../utils/const";

export default RestroCard = ({ data }) => {
    const { cloudinaryImageId, name, avgRating, cuisines, sla: { slaString }, costForTwo } = data.info;

    return (<div className='w-full h-80 hover:p-2 hover:rounded-3xl duration-200' >
        <img className="w-full h-48 object-cover rounded-2xl" src={IMAGE_BASE_URL + cloudinaryImageId} alt='restro-image' />
        <div className='flex gap-2 flex-col'>
            <div>
                <h2 className='text-xl font-bold'>{name}</h2>
            </div>

            <div className="flex items-center gap-2 font-bold">
                <h5 className='rating'>⭐️ {avgRating} </h5>
                <h5 className='esti-time'>{slaString}</h5>
            </div>

            <div className="text-gray-500 flex flex-col gap-1">
                <h3 className="whitespace-nowrap overflow-hidden">{cuisines.join(", ")}</h3>
                <h5 className='avg-price'>{costForTwo}</h5>
            </div>
        </div>
    </div >)
}
