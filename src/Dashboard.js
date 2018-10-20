import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

import Scroller from './scroller.js';
import Alerts from './alerters.js'

class ContainerRow extends React.Component {
 render(){
   console.log("Dashboard is here.")
   console.log(this.props)

    return (
        <div className='rowC'>
            <Scroller getNameOfFlaggedCases={this.props.getNameOfFlaggedCases} getNumOfFlaggedCases={this.props.getNumOfFlaggedCases} getName={this.props.getName}/>
            <Alerts setCurrentPage={this.props.setCurrentPage} getNumOfFlaggedCases={this.props.getNumOfFlaggedCases}/>
        </div>
    );
    }
 }
export default ContainerRow;
