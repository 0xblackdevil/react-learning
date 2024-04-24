import { useEffect, useState } from "react"

export default AboutComponent = ({ _CpRightYear }) => {

    const [totalRating, submitRating] = useState([]);
    const [avgRating, setAvgRating] = useState(null);

    useEffect(() => {
        calculateAverageRating();
    }, [totalRating]);

    function calculateAverageRating() {
        if (totalRating.length === 0) {
            return;
        }
        const sum = totalRating.reduce((acc, value) => acc + value, 0);
        const avg = sum / totalRating.length;
        setAvgRating(avg);
    }

    return <div className="about">
        <h1>About us</h1>
        <p>Swiggy is India's largest and highest-valued online food ordering and delivery platform founded in 2014. Swiggy is based in Bangalore, India, and as of March 2019, was operating out of 100 Indian cities. In early 2019, Swiggy expanded into general product deliveries under the name Swiggy Stores.</p>
        <p>@ {_CpRightYear} all rights recive</p>

        <div className="review-container">
            <h3>How much you like us?</h3>
            <div>
                <div className="rating-body">
                    {["😡", "😒", "😌", "😊", "😇"].map((_, index) => {
                        return <div key={index} className="rating-container" onClick={() => {
                            submitRating([...totalRating, index + 1]);
                        }}>{_}</div>
                    })}
                </div>
                <h5>{avgRating} {totalRating?.length > 0 && "( " + totalRating?.length + " )"}</h5>
            </div>
        </div>
    </div>
}