import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class Story extends React.Component{

    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId)
    }

    componentDidUpdate(prev){
        
    }

    render(){
        const {author, story} = this.props;
        if(!author || !story){
            return null;
        }
        debugger
        const name = author.username.split("@")[0];
        const initial = author.username.slice(0, 1).toUpperCase();
        return (
            <div>
                <NavbarContainer />
                <div className="story-show">
                    <div className="storyshow-header">
                        <h1>{story.title}</h1>
                        <div className="user-info">
                            <span className="user-initial">{initial}</span>
                            <span>{name}</span>
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