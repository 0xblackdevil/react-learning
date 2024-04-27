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
        return <div className="px-40 py-10 flex flex-col gap-5">
            <h1 className='text-4xl font-bold'>About us</h1>

            <p className='text-lg'>FoodKatta is India's largest and highest-valued online food ordering and delivery platform founded in 2014. FoodKatta is based in Pune, India, and as of March 2019, was operating out of 100 Indian cities. In early 2019, FoodKatta expanded into general product deliveries under the name FoodKatta Stores.</p>
            <p className='text-sm font-bold'>@ {this.props._CpRightYear} all rights recive</p>

            <UserComponent username="0xblackdevil" />
            <div className="flex flex-col gap-2">
                <h3 className='text-2xl font-bold'>How much you like us?</h3>
                <div>
                    <div className="flex gap-8 text-5xl">
                        {["😡", "😒", "😌", "😊", "😇"].map((_, index) => {
                            return <div key={index} className="cursor-pointer" onClick={() => {
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