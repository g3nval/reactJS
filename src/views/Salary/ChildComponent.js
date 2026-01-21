import React from 'react';
import { withRouter } from 'react-router-dom';

class ChildComponent extends React.Component {

    state = {
        showpeople: false,
    }


    handleViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }

    handleshowhide = () => {
        this.setState({
            showpeople: !this.state.showpeople
        })
    }

    handleDelete = (event, person) => {
        event.stopPropagation();
        this.props.deletePerson(person);
    }

    render() {
        let { arraypeople } = this.props;
        let { showpeople } = this.state;

        return (
            <>
                <div className='salary-list-container'>
                    {showpeople === false ?
                        <div>
                            <button className='btn-show-hide'
                                onClick={() => this.handleshowhide()}>
                                Show List
                            </button>
                        </div>
                        :
                        <>
                            <div className='people-table'>
                                {
                                    arraypeople.map((item, index) => {
                                        if (item.salary >= 1000) {
                                            return (
                                                <div
                                                    className='table-row'
                                                    key={item.id}
                                                    onClick={() => this.handleViewDetail(item)}
                                                >
                                                    <span className="col-name">{item.name}</span>
                                                    <span className="col-salary">{item.salary}$</span>

                                                    {this.props.isAdmin && (
                                                        <span className='btn-delete' onClick={() => this.props.deletePerson(item)}>Delete</span>
                                                    )}
                                                </div>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </div>
                            <div>
                                <button className='btn-show-hide' onClick={() => this.handleshowhide()}>Hide List</button>
                            </div>
                        </>
                    }
                </div>
            </>
        );
    }
}


export default withRouter(ChildComponent);