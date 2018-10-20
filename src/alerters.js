import React, { Component } from 'react';
import styles from './App.css';

class Alerters extends React.Component{
    render(){
        return(
            <div>
                <div>
                  <h1 className="alertsDashboard">
                  <img className="alertsSymbols" src={require("./exclaimation.png")}></img>
                  You have 1 flagged case
                  <button type="submit" className="Review" align="center" onClick={() => this.props.setCurrentPage("Final")}> Review </button>
                  </h1>

                </div>
                <div>
                  <h1 className="alertsDashboard">
                  <img className="alertsSymbols" src={require("./question.png")}></img>
                  Not sure if your student is at risk?
                  <button type="submit" value="Review" className="Review" align="center" > Check </button>
                  </h1>
                </div>
            </div>

        )
    }
}

export default Alerters;
