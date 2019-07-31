import React from 'react';
import { closeModal } from '../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    handleClose(e){
        e.preventDefault();
        this.props.closeModal();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    loginDemoUser(e){
        e.preventDefault();
        this.props.demoLogin();
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        let email_label;
        let email_input;
        
        
        if(this.props.errors.length){
            email_label = <label id="session-errors">{this.props.errors}</label>
            email_input = <input id="error-input" type="email" value={this.state.username} onChange={this.update('username')}/>
        } else {
            email_label = <label>Your email</label>
            email_input = <input type="email" value={this.state.username} onChange={this.update('username')}  />
        }

        return (
            <form className="session-form" onSubmit={this.handleSubmit}>
                <button className="button-close" onClick={this.handleClose}>{String.fromCharCode(10005)}</button>
                <h1>{this.props.formType} with email</h1>
                <h2>Enter the email and password associated with your account to log in</h2>
                <div className="email-input">
                    {email_label}
                    {email_input}
                </div>
                <div className="password-input">
                    <label>Your password</label>
                    <input type="password" value={this.state.password} onChange={this.update('password')} />
                </div>
                <div className="session-btns">
                    <button id="session-submit" type="submit" >Continue</button>
                    {this.props.otherForm}
                    <button id="demo-user" onClick={this.loginDemoUser}>Demo User</button>
                </div>
            </form>
        )
    }

}

export default SessionForm;