import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';
import Dashboard from './DashboardFull.js';
import Final from './FinalFull.js';

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
    else if (this.state.currentPage === "Dashboard") {
      return (
          <div>
            <Dashboard setCurrentPage={this.setCurrentPage}/>
          </div>
      );
    }
    else if (this.state.currentPage === "Final"){
      return (
        <div>
          <Final setCurrentPage={this.setCurrentPage}/>
        </div>
      );
    }
    return null;
  }
}
export default App;
