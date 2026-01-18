import React from "react";
import './Nav.scss';
import logo from "../../assets/images/logo.png"
import {
    NavLink
} from "react-router-dom";


class Nav extends React.Component {

    render() {
        return (
            <>
                <div className="topnav">
                    <div className="nav-brand">
                        <img src={logo} alt="Genv Logo" />
                    </div>
                    <div className="nav-menu">
                        <NavLink to="/" activeClassName="active" exact={true}>
                            Home
                        </NavLink>
                        <NavLink to="/dashboard" activeClassName="active">
                            Dashboard
                        </NavLink>
                        <NavLink to="/todo" activeClassName="active">
                            Tasks
                        </NavLink>
                        <NavLink to="/salary" activeClassName="active">
                            Salary
                        </NavLink>
                        <NavLink to="/user" activeClassName="active">
                            Users
                        </NavLink>
                    </div>
                </div>
            </>
        )

    }
}

export default Nav;