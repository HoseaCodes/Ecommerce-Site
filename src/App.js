import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { DataProvider } from './GlobalState';
import './App.css';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
// import Splash from './Pages/Splash/Slpash';
import Error from './Pages/Error/Error';
import Particles from "./Components/Particles/Particles";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s"

  }
};

// On page load loading feature
const Loader = () => (
  <div className="divLoader" style={styles.root}>
    <Particles />
  </div>
);

export default class App extends Component {
  state = {
    user: null,
    authenticated: false,
    loading: true,

  }
  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }


  render() {

    return (
      <>
        {this.state.loading ? <Loader /> : null}
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Shop
                />
              )}
            />
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                />
              )}
            />
            <Route
              exact
              path="/admin"
              render={() => (
                <Admin
                />
              )}
            />
            <Route
              exact
              path="/about"
              render={() => (
                <About
                />
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => (
                <Contact
                />
              )}
            />
            <Error />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5500));
}