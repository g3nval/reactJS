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
                        Fetch all list users
                    </div>
                    <div className='list-user-content'>
                        {ListUser && ListUser.length > 0 &&
                            ListUser.map((item, index) => {
                                return (
                                    <div className='child' key={item.id}
                                        onClick={() => this.handleViewDetailUser(item)}
                                    >
                                        {index + 1} - {item.email}

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
