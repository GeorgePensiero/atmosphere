import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
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
        this.props.demoLogin().then( () => this.props.history.push('/'));
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        
        
        
        let errors = this.props.errors.map(err => {
            return (
                <li className="session-errors" key={err.id}>{err}</li>
            )
        });

        

        return (
            <form className="session-form" onSubmit={this.handleSubmit}>
                <button className="button-close" onClick={this.handleClose}>{String.fromCharCode(10005)}</button>
                <h1>{this.props.formType} with email</h1>
                <h2>Enter the email and password associated with your account to log in</h2>
                {errors}
                <div className="email-input">
                    <label>Your full name</label>
                    <input type="input" value={this.state.username} onChange={this.update('username')} />
                </div>
                <div className="email-input">
                    <label>Your email</label>
                    <input type="email" value={this.state.email} onChange={this.update('email')} />
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

export default withRouter(SessionForm);