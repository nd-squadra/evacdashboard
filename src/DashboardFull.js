import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

import Dashboard from './Dashboard.js';
import Header from './topheader.js'

class FullDash extends React.Component {
 render(){
   console.log("Dashboard is here.")
   console.log(this.props)
    return (
        <div>
            <Header />
            <Dashboard setCurrentPage={this.props.setCurrentPage} getNumOfFlaggedCases={this.props.getNumOfFlaggedCases} getNameOfFlaggedCases={this.props.getNameOfFlaggedCases} getName={this.props.getName}/>
        </div>
    );
    }
 }
export default FullDash;
