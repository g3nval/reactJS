import React from 'react';
import usersLocal from "../../data/users.json";
import './ListUser.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import person from "../../assets/images/someone.jpg";
import { toast } from 'react-toastify';
// import axios from 'axios';

class ListUser extends React.Component {
    state = {
        ListUser: [],
        isLoading: true
    }


    async componentDidMount() {
        try {

            const res = await Promise.resolve({
                data: usersLocal
            });

            this.setState({
                ListUser: res?.data || [],
                isLoading: false
            });
        } catch (error) {
            console.error("Lỗi khi lấy danh sách user: ", error);
            this.setState({ isLoading: false });
            toast.error("Không thể kết nối đến máy chủ!");
        }
    }


    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { ListUser, isLoading } = this.state;
        return (
            <div className='list-user-container'>
                <div className='title'>User Management</div>

                <div className='list-user-content'>
                    {isLoading ? (
                        <div className="loader">
                            <span>L</span>
                            <span>O</span>
                            <span>A</span>
                            <span>D</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G</span>
                        </div>
                    ) : (
                        ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div className='user-card' key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    <div className="user-index">{index + 1}</div>
                                    <div className="user-avatar">
                                        <img
                                            src={item.avatar}
                                            alt="avatar"

                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = person
                                            }}
                                        />
                                    </div>
                                    <div className="user-info">
                                        <div className="name">{item.name}</div>
                                        <div className="email">{item.email}</div>
                                    </div>
                                    <div className="view-btn">
                                        <span>View detail</span>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);