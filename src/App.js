import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';

class App extends React.Component{
  constructor() {
    super()
    this.state={
      currentPage: "Login"
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
  }

  setCurrentPage(pageName) {
    this.setState({
      currentPage: pageName
    })
  }

  render() {
    console.log(this.state.currentPage)
    if(this.state.currentPage === "Login") {
        return (
            <div>
              <Login setCurrentPage={this.setCurrentPage}/>
            </div>
        );
    }
    return null;
  }
}
export default App;
