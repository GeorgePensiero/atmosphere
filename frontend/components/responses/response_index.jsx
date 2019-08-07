import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class ResponseIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userResponse: '',
        }
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }
    componentDidMount(){
        this.props.fetchAllResponses(this.props.match.params.storyId);
    }

    handleSubmit(e){
        const { users, session, createResponse, story } = this.props;
        e.preventDefault();
        const response = Object.assign({}, this.state);
        response.author_id = users[session.id];
        response.story_id = story;
        
        createResponse(story.id, response);
    }

    render(){
        const { responses, users, story} = this.props;
        if(responses === undefined){
            return null;
        }
        const responseList = responses.map( response => {
            return (
                <li className="response" key={response.body}>
                    <p className="author-name">{users[response.author_id].username}</p>
                    <div className="response-body">{response.body}</div>
                </li>
            );
        });
        
        return (
            <div className="responses-index">
                <div className="nav-holder">
                    <NavbarContainer />
                </div>
                <div className="story-response-container">
                    <p>Showing responses for:</p>
                    <div className="story-response-info">
                        <span className="response-story-name">{story.title}</span>
                        <span className="response-author-name">{users[story.author_id].username}</span>
                    </div>
                </div>
                <div className="response-index-main">
                    <p>Responses</p>
                    <form onSubmit={this.handleSubmit}>
                        <input className="write-response" placeholder="Write a response..." onChange={this.update('userResponse')} value={this.state.userResponse} />
                        <input type="submit" value="submit" />
                        <ul className="response-list">
                            {responseList}
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default ResponseIndex;