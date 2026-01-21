import React from 'react';
import './ListUser.scss';
import { withRouter } from 'react-router-dom';
import person from "../../assets/images/someone.jpg";
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions/userActions';

class ListUser extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers, isLoading } = this.props;

        if (isLoading === 'loading') {
            return <div className="loader">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        }

        return (
            <div className='list-user-container'>
                <div className='title'>User Management (Redux Async)</div>
                <div className='list-user-content'>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className='user-card' key={item.id} onClick={() => this.handleViewDetailUser(item)}>
                                    <div className="user-index">{index + 1}</div>
                                    <div className="user-avatar">
                                        <img src={item.avatar} alt="avatar"
                                            onError={(e) => { e.target.src = person }}
                                        />
                                    </div>
                                    <div className="user-info">
                                        <div className="name">{item.name}</div>
                                        <div className="email">{item.email}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.users.list,
        isLoading: state.users.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListUser));