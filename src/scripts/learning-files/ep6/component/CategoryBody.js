import { IMAGE_BASE_URL } from "../../ep5/utils/const";
import CategoryShimmer from "./CategoryShimmer";

export default CategoryBody = ({ categoryData }) => {


    return categoryData.length === 0 ? <CategoryShimmer /> : (
        <div className='cat-container py-10'>
            <h2 className="text-3xl font-bold">{categoryData?.header?.title}</h2>
            <div className="flex gap-10 whitespace-nowrap overflow-x-scroll">
                {categoryData?.gridElements?.infoWithStyle?.info?.map(data => <img className=" w-40 h-36" src={IMAGE_BASE_URL + data.imageId} alt={data.altName} key={data.id} />)}
            </div>
        </div>
    );
}