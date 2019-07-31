import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <span>{this.props.formType} with email</span>
                <p>Enter the email and password associated with your account to log in</p>
                <input type="text" value={this.state.username} onChange={this.update('username')}/>
                <input type="password" value={this.state.password} onChange={this.update('password')}/>
                {this.props.otherForm}
            </form>
        )
    }

}

export default SessionForm;