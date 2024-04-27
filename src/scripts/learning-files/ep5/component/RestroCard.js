import { IMAGE_BASE_URL } from "../utils/const";

export default RestroCard = ({ data }) => {
    const { cloudinaryImageId, name, avgRating, cuisines, sla: { slaString }, costForTwo } = data.info;

    return (
        <div className='p-3 w-full h-96 border border-white hover:p-5 duration-300 '>
            <div className="relative w-full h-3/5">
                <img className="w-full h-full object-cover rounded-xl" src={IMAGE_BASE_URL + cloudinaryImageId} alt='restro-image' />
            </div>
            <div className="font-bold py-2">
                <h2 className='text-xl  '>{name}</h2>
                <div className='flex gap-3'>
                    <h5>{avgRating}</h5>
                    <h5>{slaString}</h5>
                </div>
            </div>
            <div className=" font-light">
                <h5 className=" whitespace-nowrap overflow-hidden">{cuisines.join(", ")}</h5>
                <div className='flex-box'>
                    <div className="sla-container">
                        <h5 className='avg-price'>{costForTwo}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SpacialDiscountedCard = (RestroCard) => {
    return (props) => {

        return (<div className="relative">
            <div className=" z-20 absolute bg-red-500 text-white bottom-0 left-3"><h2 className="py-1 px-5">Closed</h2></div>
            <RestroCard data={props.data} />
        </div>)
    }
}