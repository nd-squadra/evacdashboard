import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

class Login extends React.Component{
  render(){
    return(
      <div className="loginpage">
      <form className="form" align="center">
        <br/><br/>
        <img src={require("./avatar.png")} className="profile"></img> <br/> <br/>
          <div>
            <input type="text" ref="username" placeholder="enter username" className="enter"/>
          </div> <br/>
          <div>
            <input type="password" ref="password" placeholder="enter password" className="enter"/>
          </div><br/><br/>
          <div>
            <button type="submit" value="Login" className="login" align="center" onClick={() => this.props.setCurrentPage("Dashboard")}> Login </button>
          </div>
      </form>
      </div>
    )
  }
}
export default Login;
