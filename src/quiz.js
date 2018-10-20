import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import FreeScrollBar from 'react-free-scrollbar';

class Login extends React.Component{
  render(){
    return(
      <div style={{width: '75%', height: '350px'}}> <br/>

        <div className='rowC'>
        <img src={require("./face2.png")} className="VicProfile"></img> <br/> <br/>
        <h3 className="victim" >This student was flagged after showing potential symptoms of having received abuse at home. Please review this case</h3>
        </div>

        <h3 className="a"> Questionnaire</h3>
        <FreeScrollBar>
        <form className="a">
            <dt>Q1: How would you rate the recent attendance of the child?</dt><br/>
            <dd><input type="radio" /> Always Absent<br/></dd>
            <dd><input type="radio" /> Occasionally Absent <br/></dd>
            <dd><input type="radio" /> Neutral<br/></dd>
            <dd><input type="radio" /> Seldom Absent<br/></dd>
            <dd><input type="radio" /> Never Absent<br/></dd>

            <br/>
            <dt>Q2: Is there a significant decrease in the child's academic performance?</dt><br/>
            <dd><input type="radio" /> Yes<br/></dd>
            <dd><input type="radio" /> No<br/></dd>

            <br/>
            <dt>Q3: How nourished do you think the child is?</dt><br/>
            <dd><input type="radio" /> Severely malnourished<br/></dd>
            <dd><input type="radio" /> Somewhat malnourished <br/></dd>
            <dd><input type="radio" /> Neutral<br/></dd>
            <dd><input type="radio" /> Somewhat healthy<br/></dd>
            <dd><input type="radio" /> Very healthy<br/></dd>

            <br/>
            <dt>Q4: How would you describe the conduct of the child?</dt><br/>
            <dd><input type="radio" /> Very poor<br/></dd>
            <dd><input type="radio" /> Poor <br/></dd>
            <dd><input type="radio" /> Neutral<br/></dd>
            <dd><input type="radio" /> Good<br/></dd>
            <dd><input type="radio" /> Very good<br/></dd>

            <br/>
            <dt>Q5: Is there a change in the child's recent behavior compared to 1 month ago?</dt><br/>
            <dd><input type="radio" /> Yes<br/></dd>
            <dd><input type="radio" /> No<br/></dd>

        </form>
        </FreeScrollBar>
      </div>
    )
  }
}
export default Login;
