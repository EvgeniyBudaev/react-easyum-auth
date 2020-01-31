import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { URL } from "../../../../data/urls";

// import * as classes from "./Nav.module.scss";

class Nav extends Component {
  render() {
    const { isLoggedIn, isAdmin } = this.props;

    const renderIsAdmin = () => {
      return (
        <Fragment>
          <li>
            <Link to={URL.ADD_PRODUCT}>Add Product</Link>
          </li>
          {/* <li>
            <Link to={URL.PRODUCTS}>Products</Link>
          </li> */}
        </Fragment>
      );
    };

    const renderIsLoggedIn = () => {
      return (
        <Fragment>
          <li>
            <Link to={URL.HOME} onClick={this.props.onLogout}>
              Logout
            </Link>
          </li>
        </Fragment>
      );
    };

    const renderIsLoggedOut = (
      <Fragment>
        <li>
          <Link to={URL.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={URL.SIGNUP}>Registaration</Link>
        </li>
      </Fragment>
    );

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="logo">
              <Link to={URL.HOME}>Store</Link>
            </div>
            <div className="main_list">
              <ul className="navlinks">
                {isLoggedIn ? renderIsLoggedIn() : renderIsLoggedOut}
                {isAdmin ? renderIsAdmin() : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
