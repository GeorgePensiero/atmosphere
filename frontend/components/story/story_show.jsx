import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Story extends React.Component{

    componentDidMount(){
        debugger
        this.props.fetchStory(this.props.match.params.storyId)
    }



    render(){
        const {author, story} = this.props;
        debugger
        if(!author || !story){
            return null;
        }
        const name = author.username.split("@")[0];
        const initial = author.username.slice(0, 1).toUpperCase();
        return (
            <div className="story-show">
                <NavbarContainer />
                <div className="story-show-main">
                    <div className="storyshow-header">
                        <h1>{story.title}</h1>
                        <div className="user-info">
                            <Link to={`/users/${author.id}/profile`} className="author-name">
                                <span className="user-initial">{initial}</span>
                                <span>{name}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="story-img-div">
                        <img className="storypage-img" src={story.photoUrl} />
                    </div>
                    <div className="story-body">
                        <p>{story.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story;