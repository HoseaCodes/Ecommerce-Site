import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Splash from './Pages/Splash/Slpash';
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

const Loader = () => (
  <div className="divLoader" style={styles.root}>
    {/* <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg> */}
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
        {/* <DataProvider> */}

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
            {/* <Route
              exact
              path="/"
              render={() => (
                <Splash
                />
              )}
            /> */}
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
              path="/about"
              render={() => (
                <About
                />
              )}
            />
            {/* <Route
              exact
              path="/shop"
              render={() => (
                <Shop
                />
              )}
            /> */}
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
        {/* </DataProvider> */}
      </>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5500));
}