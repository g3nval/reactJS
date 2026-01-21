import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from '../../store/actions/authActions';
import logoNav from '../../assets/images/logo.png';

const MOCK_ACCOUNTS = [
    { id: 1, name: 'Anh Quân (Admin)', role: 'Admin', email: 'admin@genv.com' },
    { id: 2, name: 'Thanh Hằng (Staff)', role: 'Staff', email: 'hang.staff@genv.com' },
    { id: 3, name: 'Minh Đức (HR)', role: 'HR', email: 'duc.hr@genv.com' }
];

class Nav extends React.Component {
    state = {
        showLoginOptions: false
    }


    toggleDropdown = () => {
        this.setState({ showLoginOptions: !this.state.showLoginOptions });
    }

    handleLogin = (account) => {
        this.props.doLogin(account);
        this.setState({ showLoginOptions: false });
    }

    render() {
        const { isLoggedIn, user, doLogout } = this.props;
        const { showLoginOptions } = this.state;

        return (
            <div className="topnav">
                <div className="nav-brand">
                    <img src={logoNav} alt="Genv Logo" />
                </div>

                <div className="nav-menu">
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                    <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                    <NavLink to="/user" activeClassName="active">Users</NavLink>
                    <NavLink to="/salary" activeClassName="active">Salary</NavLink>
                </div>

                <div className="nav-auth">
                    {isLoggedIn ? (
                        <div className="user-profile">
                            <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
                            <span className="user-name">{user.name}</span>
                            <button className="btn-logout" onClick={doLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className="login-container">
                            <button className="btn-login" onClick={this.toggleDropdown}>
                                Login ▾
                            </button>

                            {showLoginOptions && (
                                <div className="login-dropdown">
                                    <div className="dropdown-header">Select Account</div>
                                    {MOCK_ACCOUNTS.map(acc => (
                                        <div
                                            key={acc.id}
                                            className="dropdown-item"
                                            onClick={() => this.handleLogin(acc)}
                                        >
                                            <div className="acc-name">{acc.name}</div>
                                            <div className="acc-role">{acc.role}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch(login(user)),
    doLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);