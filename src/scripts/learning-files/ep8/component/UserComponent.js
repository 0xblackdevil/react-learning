import React from "react";
import { GITHUB_API } from "../../ep5/utils/const";

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
        return <div className="user-data-container">
            <div className="profile-img"><img src={avatar_url} alt="user-img" /></div>
            <div className="profile-detail">
                <div className="detail-container">
                    <h3 className="username">{name}</h3>
                    <p className="user-bio">{bio}</p>
                </div>
                <a className="github-btn" href={html_url}>visit profile</a>
            </div>
        </div>
    }

}