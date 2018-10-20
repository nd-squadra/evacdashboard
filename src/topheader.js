import React, { Component } from 'react';
import styles from './App.css';

class Topheader extends React.Component{
    render(){
        return(
            <div>
                <img className="topheaderLogo" src={require("./blob.png")}></img>
            </div> 
        )

    }
}

export default Topheader