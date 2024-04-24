import { IMAGE_BASE_URL } from "../../utils/const";
import CategoryShimmer from "./Category-shimmer";

export default CategoryBody = ({ categoryData }) => {


    return categoryData.length === 0 ? <CategoryShimmer /> : (
        <div className='cat-container'>
            <h2>{categoryData?.header?.title}</h2>
            <div className="cat-list">
                {categoryData?.gridElements?.infoWithStyle?.info?.map(data => <div className="cat-img" key={data.id}>
                    <img src={IMAGE_BASE_URL + data.imageId} alt={data.altName} />
                </div>)}
            </div>
        </div>
    );
}