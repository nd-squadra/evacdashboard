import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

import Dashboard from './Dashboard.js';
import Header from './topheader.js'

class FullDash extends React.Component {
 render(){
   console.log("Dashboard is here.")
    return (
        <div>
            <Header />
            <Dashboard setCurrentPage={this.props.setCurrentPage}/>
        </div>
    );
    }
 }
export default FullDash;
