import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class ResponseIndex extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            body: '',
            focus: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleFocus = this.toggleFocus.bind(this);
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


    toggleFocus(){
        this.setState({focus: !this.state.focus});
    }

    handleSubmit(e){
        const { users, session, createResponse} = this.props;
        e.preventDefault();
        const response = Object.assign({}, this.state);
        response.author_id = users[session.id].id;
        response.story_id = this.props.match.params.storyId;
        createResponse(response.story_id, response);
        this.state.body = '';
    }

    render(){
        const { responses, users, story, session, openModal } = this.props;
        if(!responses || !users || !story){
            return null;
        }
        const currentUser = users[session.id];
        const focused = this.state.focus;
        let userResponse;
        if(this.props.session.id === null){
            userResponse = <input type="text" placeholder="Write a response..." value={this.state.body}  onFocus={() => openModal('signup')} className="user-response-closed" />
        } else {            
            userResponse =  <div>
                                <input type="text" placeholder="Write a response..." onChange={this.update('body')} value={this.state.body} className="user-response-closed" />
                                {/* <img className="caret-img" src={window.caretUrl} alt="caret-img" /> */}
                            </div>
        }
        // if(focused){
        //     userResponse = <div className="user-response-open" onBlur={this.toggleFocus}>
        //         <input autoFocus value={this.state.body} onChange={this.update('body')} />
        //         <button className="publish-response-btn" onClick={this.handleSubmit}>Publish</button>
        //     </div>
        // } else {
        //     userResponse = 
        //         <input type="text" placeholder="Write a response..." className="user-response-closed" onFocus={this.toggleFocus} />
        // }
        const responseList = responses.map( (response, idx) => {
            let deleteButton;
            const author = users[response.author_id];
            // if(author === currentUser){
            //     deleteButton = <button onClick={}
            // }
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
                        <div className="write-response">
                            {userResponse}
                            <button onClick={this.handleSubmit}>Publish</button>
                        </div>
                        {/* <form onSubmit={this.handleSubmit}> */}
                            
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