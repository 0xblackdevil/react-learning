export default RestroDetail = ({ _restroDetail }) => {
    console.log(_restroDetail);
    const { name, avgRatingString, costForTwoMessage, cuisines, totalRatingsString } = _restroDetail;
    return <div className="restro-detail-container">
        <h1 className="restro-title">{name}</h1>
        <div className="state-container">
            <div className="rating-container">
                <h4 className="cost">{avgRatingString}</h4>
                <h4 className="rating">({totalRatingsString})</h4>
            </div>
            • <h4 className="cost">{costForTwoMessage}</h4>
        </div>
        <h5 className="cuisines-container">
            {cuisines?.join(", ")}
        </h5>

    </div>
}