import React from 'react';
import axios from 'axios';
import './ListUser.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


class ListUser extends React.Component {
    state = {
        ListUser: []
    }

    async componentDidMount() {

        let res = await axios.get('https://api.escuelajs.co/api/v1/users')
        this.setState({
            ListUser: res && res.data ? res.data : []
        })

    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { ListUser } = this.state;
        return (
            <>
                <div className='list-user-container'>
                    <div className='title'>
                        User Management
                    </div>
                    <div className='list-user-content'>
                        {ListUser && ListUser.length > 0 &&
                            ListUser.map((item, index) => {
                                return (
                                    <div className='user-card' key={item.id}
                                        onClick={() => this.handleViewDetailUser(item)}
                                    >
                                        <div className="user-index">{index + 1}</div>
                                        <div className="user-avatar">
                                            <img src={item.avatar} alt="avatar"
                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/50' }}
                                            />
                                        </div>
                                        <div className="user-info">
                                            <div className="name">{item.name}</div>
                                            <div className="email">{item.email}</div>
                                        </div>
                                        <div className="view-btn">
                                            <span>Xem chi tiết</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

}

export default withRouter(ListUser);
