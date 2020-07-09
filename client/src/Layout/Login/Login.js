import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { Redirect } from "react-router-dom";
import Auth from '../../Modules/Auth'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: true,
      close : false,
      isLog : false,
    };
  }
  
  onCLose(){
    if(this.props.location.state){
      return(<Redirect  to={this.props.location.state.prev}/>)
    } else{
      return(<Redirect to="/home"/>)
    }
  }
  toggle = () => {
    this.setState({
      modal: false,
      close : true
    });
  };
  onLogin(e){
    e.preventDefault();
    Auth.authenticateUser();
    this.setState({
      modal: false,
      close : true
    })
    console.log(this.state)
  }
  render() {
    return (
      <React.Fragment>
        {this.state.close && this.onCLose()}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          disableScrollLock={false}
          open={this.state.modal}
          onClose={this.toggle}
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ textAlign: "center" ,top:"15%"}}
          >
            <div className="modal-content">
              <div className="modal-body">
                <h1><b>Login</b></h1>
                <form style={{textAlign :"left"}} onSubmit={(e)=>this.onLogin(e)}>
                  <div className="form-group">
                    <label><b>Username</b></label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label><b>Password</b></label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword1"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <input type="checkbox" className="form-check-input" id="Check1"/>
                      <label className="form-check-label">Remmember password</label>
                    </div>
                    <div className="col-6 text-right">
                      <a href="/forgot" style={{color : "black"}}><span><u>Forgot password?</u></span></a>
                    </div>
                  </div>
                  <div style={{textAlign:"center"}} className="my-4">
                    <button type="submit" className="btn partic-btn partic-yellow-bg" style={{width:"25%"}} >
                      Submit
                    </button>
                  </div>
                </form>
                <small className="text-muted">Not a user? <a href='/register' style={{color : "black"}}><u>Sign up here</u></a></small>
              </div>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
