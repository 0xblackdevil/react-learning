import { useEffect, useRef } from "react";

function OfferComponent() {

    // const timer = useRef();

    useEffect(() => {

        const timer = setInterval(() => {

        }, 1000);

        return () => {
            clearInterval(timer);
        }

    }, []);

    return (<div>
        <h1>Offer Component</h1>
        <p>This is the offer component</p>
    </div>);
}

export default OfferComponent;