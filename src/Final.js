import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

import Scroller from './scroller.js';
import Quiz from './quiz.js'

class ContainerRow extends React.Component {
 render(){
   console.log("Dashboard is here.")
   console.log(this.props)

    return (
        <div className='rowC'>
            <Scroller />
            <Quiz setCurrentPage={this.props.setCurrentPage}/>
        </div>
    );
    }
 }
export default ContainerRow;
