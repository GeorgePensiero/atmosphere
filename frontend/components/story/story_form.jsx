import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class StoryForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: "",
            body: "",
            author: this.props.author,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.returnToSplash = this.returnToSplash.bind(this);
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }
    
    returnToSplash(){
        this.props.history.push('/')
    }

    handleSubmit(e){
        e.preventDefault();
        const story = Object.assign({}, this.state);
        this.props.createStory(story).then(() => this.props.history.push('/'));
    }

   
    render(){
        const initial = this.props.author.username.slice(0, 1).toUpperCase();
        return (
            <>
                <header className="story-header">
                    <div className="left-nav">
                        <div className="atmosphere-letter" onClick={this.returnToSplash}>A</div>
                    </div>
                    <div className="right-nav">
                        <button className="submit-btn" onClick={this.handleSubmit}>Ready to publish?</button>
                        <div className="user-initial">{initial}</div>
                    </div>
                </header> 
                <div className="story-form-main">
                    <input placeholder="Title" onChange={this.update('title')} value={this.state.title}/>
                    <textarea placeholder="Start your story..." onChange={this.update('body')} value={this.state.body}/>
                </div>
            </>
        )
    }
}

export default StoryForm;