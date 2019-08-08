import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class ResponseIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            body: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }
    componentDidMount(){
        this.props.fetchAllResponses(this.props.match.params.storyId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.storyId !== this.props.match.params.storyId){
            this.props.fetchAllResponses(this.props.match.params.storyId);
        }
    }

    handleSubmit(e){
        const { users, session, createResponse} = this.props;
        e.preventDefault();
        const response = Object.assign({}, this.state);
        response.author_id = users[session.id].id;
        response.story_id = this.props.match.params.storyId;
        createResponse(response.story_id, response);
    }

    render(){
        const { responses, users, story} = this.props;
        if(!responses || !users || !story){
            return null;
        }
        const responseList = responses.map( (response, idx) => {
            const author = users[response.author_id];
            const initial = author.username.slice(0, 1);
            return (
                <li className="response" key={response.body + idx}>
                    <div className="response-content">
                        <div className="response-author-info">
                            <Link to={`/users/${author.id}/profile`} className="route-link">
                                <span className="user-initial response-initial">{initial}</span>
                                <p className="response-author-name">{author.username}</p>
                            </Link>
                        </div>
                        <div className="response-body">{response.body}</div>
                    </div>
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
                    <Link to={`/story/${story.id}`} className="route-link">
                        <div className="story-response-info">
                            <span className="response-story-name">{story.title}</span>
                            <span className="response-author-name">{users[story.author_id].username}</span>
                        </div>
                    </Link>
                </div>
                <div className="response-wrapper">
                    <div className="response-index-main">
                        <div className="response-div"><p>Responses</p></div>
                        {/* <form onSubmit={this.handleSubmit}> */}
                            <input className="write-response" placeholder="Write a response..." onChange={this.update('body')}value={this.state.userResponse} />
                            <button className="submit-btn" onClick={this.handleSubmit}>Ready to publish?</button>
                            <ul className="response-list">
                                {responseList}
                            </ul>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResponseIndex;