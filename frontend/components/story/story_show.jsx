import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import LikeButton from '../likes/like_button';

class Story extends React.Component{
    
    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId)
    }



    render(){
        const {author, story} = this.props;
        if(!author || !story){
            return null;
        }
        let response_text;
        if(story.num_responses > 0){
            response_text = `See responses(${story.num_responses})`
        } else {
            response_text = "Write the first response"
        }
        const initial = author.username.slice(0, 1).toUpperCase();
        return (
            <div className="story-show">
                <div className="story-show-main">
                    <div className="storyshow-header">
                        <h1>{story.title}</h1>
                        <div className="user-info">
                            <Link to={`/users/${author.id}/profile`} className="author-name">
                                <span className="user-initial">{initial}</span>
                                <span className="author-name">{author.username}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="story-img-div">
                        <img className="storypage-img" src={story.photoUrl} />
                    </div>
                    <div className="story-body">
                        <p>{story.body}</p>
                    </div>
                    <LikeButton  component={story} type="story-like" author={author}/> 
                    <div className="story-writer-info">
                        <p>WRITTEN BY</p>
                        <Link to={`/users/${author.id}/profile`} className="author-name"><h2>{author.username}</h2></Link>
                    </div>
                    <div className="response-button">
                        <Link to={`/story/${story.id}/responses`}><button>{response_text}</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story;