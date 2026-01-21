import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
import "./Salary.scss";
import { connect } from 'react-redux';
import { addSalaryUser, deleteSalaryUser } from '../../store/actions/salaryActions';

class Salary extends React.Component {



    componentDidUpdate(prevProps, prevState) {

        if (prevProps.listUsers !== this.props.listUsers) {
            console.log(">> Salary Store Updated!", this.props.listUsers);
        }
    }

    render() {
        const { listUsers, addNewSalaryUser, deleteSalaryUser, currentUser, isLoggedIn } = this.props;
        const isAdmin = isLoggedIn && currentUser && currentUser.role === 'Admin';
        return (
            <div className="salary-container">
                <div className="salary-header">
                    <h2 className="salary-title">Salary Management</h2>
                    {isLoggedIn && (
                        <div className="user-role-badge">
                            Logged in as: <span className={isAdmin ? "role-admin" : "role-staff"}>
                                {currentUser.name} ({currentUser.role})
                            </span>
                        </div>
                    )}
                </div>
                <div className="salary-body">
                    {isAdmin ? (
                        <AddComponent addNewSalaryUser={addNewSalaryUser} />
                    ) : (
                        <div className="permission-info">
                            * You don't have permission to add new salary records.
                        </div>
                    )}
                    <ChildComponent
                        arraypeople={listUsers}
                        deletePerson={deleteSalaryUser}
                        isAdmin={isAdmin}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        listUsers: state.salary || [],
        currentUser: state.auth.currentUser,
        isLoggedIn: state.auth.isLoggedIn
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        addNewSalaryUser: (person) => dispatch(addSalaryUser(person)),
        deleteSalaryUser: (person) => dispatch(deleteSalaryUser(person))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Salary);