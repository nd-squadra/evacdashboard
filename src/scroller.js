import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

class Scroller extends React.Component{
  constructor() {
    super()
    this.getFlaggedCasesRows = this.getFlaggedCasesRows.bind(this)
    this.getNameRows = this.getNameRows.bind(this)
  }

  getFlaggedCasesRows() {
    return this.props.getNameOfFlaggedCases().map(flaggedCase => {return <dd className="b"><b>{flaggedCase.name}</b></dd>} )
  }

  getNameRows() {
    return this.props.getName().map(Case => {return <dd className="b">{Case.name}</dd>} )
  }

  render(){
    return(
      <div style={{width: '25%' , height: '290px'}} className="scrollerback"> <br/>
        <img src={require("./passport7.jpg")} className="DashProfile"></img> <br/> <br/>
        <h3 className="c">Welcome, Mr Ho Wei Kang</h3>
        <FreeScrollBar className="scrollerback">
          <dl className="a">
            <dt>Dashboard</dt><br/>
            <dt><b>Flagged Cases</b></dt>
              {this.getFlaggedCasesRows()}
            <dt>List of Students</dt>
              {this.getNameRows()}
            </dl>
        </FreeScrollBar>
      </div>
    )
  }
}
export default Scroller;
