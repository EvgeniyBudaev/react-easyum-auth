import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { LoginPage, SignupPage, AddProductPage } from "../pages";
import { MainLayout } from "../layout/Main/MainLayout";
import { URL } from "../../data/urls";
import { MainPage } from "../../containers/MainPage/MainPage";
import { PostPage } from '../../containers/PostPage/PostPage';

export default class App extends Component {
  maxIdUser = 1;
  maxIdProduct = 1;

  state = {
    isLoggedIn: false,
    isAdmin: false,
    usersData: [{ email: "admin", password: "123", id: 1 }],
    productsData: [],
    adminCredentials: {
      email: "admin",
      password: "123"
    }
  };

  funcUser(email, password) {
    return {
      email,
      password,
      id: this.maxIdUser++
    };
  }

  funcProduct(title, price) {
    return {
      title,
      price,
      id: this.maxIdProduct++
    };
  }

  onLogin = (email, password) => {
    if (
      email === this.state.adminCredentials.email &&
      password === this.state.adminCredentials.password
    ) {
      this.setState({ isAdmin: true, isLoggedIn: true });
    }
  };

  onSignUp = (email, password) => {
    const newUser = this.funcUser(email, password);

    this.setState(({ usersData }) => {
      const newArr = [...usersData, newUser];

      return {
        usersData: newArr
      };
    });
  };

  onAddProduct = (title, price) => {
    const newProduct = this.funcProduct(title, price);

    this.setState(({ productsData }) => {
      const newArr = [...productsData, newProduct];

      return {
        productsData: newArr
      };
    });
  };

  render() {
    const { isLoggedIn, isAdmin } = this.state;

    return (
      <div>
        <MainLayout
          isLoggedIn={isLoggedIn}
          isAdmin={isAdmin}
          onLogout={() => this.setState({ isAdmin: false, isLoggedIn: false })}
        >
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Switch>
            <Route path={URL.LOGIN} exact>
              <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
            </Route>

            <Route path={URL.SIGNUP} exact>
              <SignupPage onSignUp={this.onSignUp.bind(this)} />
            </Route>

            <Route path={URL.ADD_PRODUCT} exact>
              <AddProductPage onAddProduct={this.onAddProduct} />
            </Route>

            <Route path={URL.POST} exact>
              <PostPage />
            </Route>

          </Switch>
        </MainLayout>
      </div>
    );
  }
}
