import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

class Login extends React.Component{
  render(){
    return(
      <div style={{width: '400px', height: '500px'}} className="scrollerback"> <br/>
        <img src={require("./avatar.png")} className="DashProfile"></img> <br/> <br/>
        <h3 className="c">Welcome, Mr Ho Wei Kang</h3>
        <FreeScrollBar className="scrollerback">
          <dl className="a">
            <dt>Dashboard</dt><br/>
            <dt><b>Flagged Cases</b></dt>
              <dd className="b"><b>Paul</b></dd><br/>
            <dt>List of Students</dt>
              <dd className="b">Matthew</dd>
              <dd className="b">Mark</dd>
              <dd className="b">Luck</dd>
              <dd className="b">John</dd>
              <dd className="b">Paul</dd>
              <dd className="b">James</dd>
              <dd className="b">Peter</dd>
              <dd className="b">Andrew</dd>
              <dd className="b">Joseph</dd>
              <dd className="b">Shaun</dd>
              <dd className="b">Hazel</dd>
              <dd className="b">Si Han</dd>
              <dd className="b">Jianzhi</dd>
              <dd className="b">Benerd</dd>
              <dd className="b">Ivan</dd>
            </dl>
        </FreeScrollBar>
      </div>
    )
  }
}
export default Login;
