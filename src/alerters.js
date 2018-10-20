import React, { Component } from 'react';
import styles from './App.css';

class Alerters extends React.Component{
    render(){
        return(
            <div>
                <div className="valign">
                  <h1 className="alertsDashboard">
                  <img className="alertsSymbols" src={require("./exclaimation.png")}></img>
                  You have 1 flagged case
                  <button type="submit" className="Review" onClick={() => this.props.setCurrentPage("Final")}> Review </button>
                  </h1>

                </div>
                <div className="valign">
                  <h1 className="alertsDashboard">
                  <img className="alertsSymbols" src={require("./question.png")}></img>
                  Suspicious of domestric abuse?
                  <button type="submit" value="Review" className="Review" > Check </button>
                  </h1>
                </div>
            </div>

        )
    }
}

export default Alerters;
