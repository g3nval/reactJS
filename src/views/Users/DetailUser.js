import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`)
            this.setState({
                user: res && res.data ? res.data : {}
            })
            console.log('>> check res user: ', res);
        }


    }
    handleBackButton = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <div className="detail-user-container">
                <div className="user-card">
                    <div className="card-header">User Profile</div>

                    {isEmptyObj === false && (
                        <div className="card-body">
                            <div className="avatar-wrapper">
                                <img src={user.avatar} alt="avatar" />
                            </div>

                            <div className="user-info">
                                <div className="info-row">
                                    <label>ID</label>
                                    <span>#{user.id}</span>
                                </div>
                                <div className="info-row">
                                    <label>Name</label>
                                    <span>{user.name}</span>
                                </div>
                                <div className="info-row">
                                    <label>Email</label>
                                    <span>{user.email}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="card-footer">
                        <button className="btn-back" onClick={() => this.handleBackButton()}>
                            Back to List
                        </button>
                    </div>
                </div>
            </div>
        )
    }



}

export default withRouter(DetailUser);