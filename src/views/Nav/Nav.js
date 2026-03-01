import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../../store/slices/authSlice';
import './Nav.scss';
import logoNav from '../../assets/images/logo.png';

const Nav = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, currentUser } = useSelector(state => state.auth);
    const [account, setAccount] = useState({ username: '', password: '' });

    const handleOnChangeInput = (e, id) => {
        setAccount({ ...account, [id]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(account));
        setAccount({ username: '', password: '' });
    };

    return (
        <nav className="topnav" aria-label="Main Navigation">
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

            <section className="nav-auth" aria-label="User Authentication">
                {isLoggedIn && currentUser ? (
                    <div className="user-info">
                        <span>Welcome, <strong>{currentUser.username}</strong> ({currentUser.role})</span>
                        <button onClick={() => dispatch(logout())} className="btn-logout">Logout</button>
                    </div>
                ) : (
                    <form onSubmit={handleLoginSubmit} className="login-form">
                        <input
                            type="text" placeholder="Username" aria-label="Username"
                            value={account.username} onChange={(e) => handleOnChangeInput(e, 'username')}
                            required
                        />
                        <input
                            type="password" placeholder="Password" aria-label="Password"
                            value={account.password} onChange={(e) => handleOnChangeInput(e, 'password')}
                            required
                        />
                        <button type="submit" className="btn-login">Login</button>
                    </form>
                )}
            </section>
        </nav>
    );
};

export default Nav;