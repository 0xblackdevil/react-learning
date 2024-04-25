import { IMAGE_BASE_URL } from "../../utils/const";
import CategoryShimmer from "./Category-shimmer";

export default CategoryBody = ({ categoryData }) => {


    return categoryData.length === 0 ? <CategoryShimmer /> : (
        <div className="px-20 py-5">
            <h2 className="font-bold text-3xl">{categoryData?.header?.title}</h2>
            <div className="flex ">
                {categoryData?.gridElements?.infoWithStyle?.info?.map(data => <div key={data.id}>
                    <img className="w-40 h-36" src={IMAGE_BASE_URL + data.imageId} alt={data.altName} />
                </div>)}
            </div>
        </div>
    );
}

{/* <div className='cat-container py-10'>
<h2 className="text-3xl font-bold">{categoryData?.header?.title}</h2>
<div className="flex gap-10 whitespace-nowrap overflow-x-scroll">
    {categoryData?.gridElements?.infoWithStyle?.info?.map(data => <img className=" w-40 h-36" src={IMAGE_BASE_URL + data.imageId} alt={data.altName} key={data.id} />)}
</div>
</div> */}