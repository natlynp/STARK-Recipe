import React from "react";
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions'


const mapStateToProps = (store) => ({
  usernameStr:store.auth.usernameStr,
  passworgStr:store.auth.passwordStr
});

const mapDispatchToProps = (dispatch) => ({
  updateUsernameStr:(e) => {dispatch(actions.updateUsernameStr(e.target.value))},
  updatePasswordStr:(e) => {dispatch(actions.updatePasswordStr(e.target.value))},
  loginApi:(usernameStr, passwordStr) => {dispatch(actions.loginApi(usernameStr, passwordStr))},
});


class AuthPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {/* input field for username */}
        <div className="username input">
          <input type="text" className="textbox" value={this.props.usernameStr} onChange={this.props.updateUsernameStr}></input>
        </div>
        {/* input field for password */}
        <div className="password input">
          <input type="password" className="textbox" value={this.props.passwordStr} onChange={this.props.updatePasswordStr}></input>
        </div>
        {/* contains the signup and login button */}
        <div className="buttons">
          <span>
            <button id="loginButton" onClick={(e)=>{this.props.loginApi(this.props.usernameStr, this.props.passwordStr)}}></button> <button id="signUpButton" ></button>
          </span>
       </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
