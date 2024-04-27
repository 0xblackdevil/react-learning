import React from "react";
import { GITHUB_API } from "../utils/const";

export default class UserComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                avatar_url: "", name: "", bio: "", html_url: ""
            }
        }
    }

    async componentDidMount() {
        const result = await fetch(GITHUB_API + this.props.username);
        const response = await result.json();
        this.setState({
            user: response
        })
    }

    render() {
        const { avatar_url, name, bio, html_url, } = this.state.user;
        return <div className="py-10 flex h-40 gap-5">
            <img src={avatar_url} alt="user-img" className="h-full rounded-full" />
            <div className="flex flex-col  gap-2">
                <div>
                    <h3 className="font-bold text-xl">{name}</h3>
                    <p className="font-light ">{bio}</p>
                </div>
                <div className="group"><a className="px-8 py-2 bg-black rounded-full text-white border group-hover:border-black group-hover:text-black group-hover:bg-transparent delay-300" href={html_url}>visit profile</a></div>
            </div>
        </div>
    }

}