import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

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
            return (
                <li className="response" key={response.body + idx}>
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
                    {/* <form onSubmit={this.handleSubmit}> */}
                        <input className="write-response" placeholder="Write a response..." onChange={this.update('body')} value={this.state.userResponse} />
                        <button className="submit-btn" onClick={this.handleSubmit}>Ready to publish?</button>
                        <ul className="response-list">
                            {responseList}
                        </ul>
                    {/* </form> */}
                </div>
            </div>
        )
    }
}

export default ResponseIndex;