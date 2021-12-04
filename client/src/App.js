import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import UserContext from "./context/userContext";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import Home from "./components/home"


class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user);
  }
  

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={{user: user}}>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={Home}/>
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </UserContext.Provider>
    );
  }
}

export default App;

