import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Main from './components/Main';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';


class App extends Component {
  render() {
    let appStyle = {
      minWidth: "325px"
    }

    return (
      <div className="container" style={appStyle}>
        <Header />
        <Route path='/' component={Main} exact/>  
      </div>
    );
  }
}

export default App;
