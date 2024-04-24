export default RestroDetail = ({ _restroDetail }) => {
    console.log(_restroDetail);
    const { name, avgRatingString, costForTwoMessage, cuisines, totalRatingsString } = _restroDetail;
    return <div className=" pt-20">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="flex mt-1 gap-5">
            <div className="flex gap-2">
                <h4>{avgRatingString}</h4>
                <h4>{"( " + totalRatingsString + " )"}</h4>
            </div>
            <h4>{costForTwoMessage}</h4>
        </div>
        <h5 className="flex gap-2 text-[#eba761] mt-1 font-bold">
            {cuisines?.join(", ")}
        </h5>

    </div>
}