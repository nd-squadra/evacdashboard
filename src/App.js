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
      currentPage: "Login",
      students: null
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
    this.getNumOfFlaggedCases = this.getNumOfFlaggedCases.bind(this)
    this.getNameOfFlaggedCases = this.getNameOfFlaggedCases.bind(this)
    this.getName = this.getName.bind(this)
  }

  getNameOfFlaggedCases(){
    let flaggedStudents = [];
      Object.keys(this.state.students).forEach(student => {
        if (this.state.students[student].childflag === 1) {
          flaggedStudents.push(this.state.students[student]);
        }
      });
      return flaggedStudents;
  }

  getName(){
    let students = [];
      Object.keys(this.state.students).forEach(student => {
          students.push(this.state.students[student]);
      });
      return students;
  }

  getNumOfFlaggedCases(){
    let numOfFlaggedCases = 0;
    Object.keys(this.state.students).forEach(student => {
      if (this.state.students[student].childflag === 1) {
        numOfFlaggedCases += 1;
      }
    });
    return numOfFlaggedCases
  }

  componentDidMount() {
    fetch("https://orbital-demo-4d66a.firebaseio.com/students_new.json", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse =>
        this.setState({
          students: jsonResponse
        })
      );
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
            <Dashboard setCurrentPage={this.setCurrentPage} getNumOfFlaggedCases={this.getNumOfFlaggedCases} getNameOfFlaggedCases={this.getNameOfFlaggedCases} getName={this.getName}/>
          </div>
      );
    }
    else if (this.state.currentPage === "Final"){
      return (
        <div>
          <Final setCurrentPage={this.setCurrentPage} getNumOfFlaggedCases={this.getNumOfFlaggedCases} getNameOfFlaggedCases={this.getNameOfFlaggedCases} getName={this.getName}/>
        </div>
      );
    }
    return null;
  }
}
export default App;
