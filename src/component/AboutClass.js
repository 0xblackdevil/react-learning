import React from 'react';
import UserComponent from './UserComponent';

export default class AboutClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalRating: [],
            avgRating: null
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("Timer is running...")
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <div className="about">
            <h1>About us</h1>
            <p>FoodKatta is India's largest and highest-valued online food ordering and delivery platform founded in 2014. FoodKatta is based in Pune, India, and as of March 2019, was operating out of 100 Indian cities. In early 2019, FoodKatta expanded into general product deliveries under the name FoodKatta Stores.</p>
            <p>@ {this.props._CpRightYear} all rights recive</p>
            <UserComponent username="0xblackdevil" />
            <div className="review-container">
                <h3>How much you like us?</h3>
                <div>
                    <div className="rating-body">
                        {["😡", "😒", "😌", "😊", "😇"].map((_, index) => {
                            return <div key={index} className="rating-container" onClick={() => {
                                this.setState({
                                    totalRating: [...this.state.totalRating, index + 1],
                                    avgRating: this.state.totalRating.reduce((acc, value) => acc + value, 0) / this.state.totalRating.length
                                });

                            }}>{_}</div>
                        })}
                    </div>
                    <h5>{this.state.avgRating} {this.state.totalRating?.length > 0 && "( " + this.state.totalRating?.length + " )"}</h5>
                </div>

            </div>
        </div>
    }

}