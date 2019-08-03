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

    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const story = Object.assign({}, this.state);
        this.props.createStory(story).then(() => this.props.history.push('/'));
    }

   
    render(){
        return (
            <>
                <button className="story-submit-btn" onClick={this.handleSubmit}>Ready to publish?</button>
                <div className="story-form-main">
                    <input placeholder="Title" onChange={this.update('title')} value={this.state.title}/>
                    <textarea placeholder="Start your story..." onChange={this.update('body')} value={this.state.body}/>
                </div>
            </>
        )
    }
}

export default StoryForm;