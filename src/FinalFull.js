import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

import Final from './Final.js';
import Header from './topheader.js'

class FullDash extends React.Component {
 render(){
   console.log("Fully Final is here.")
    return (
        <div>
            <Header />
            <Final setCurrentPage={this.props.setCurrentPage} getNumOfFlaggedCases={this.props.getNumOfFlaggedCases} getNameOfFlaggedCases={this.props.getNameOfFlaggedCases} getName={this.props.getName}/>
        </div>
    );
    }
 }
export default FullDash;
