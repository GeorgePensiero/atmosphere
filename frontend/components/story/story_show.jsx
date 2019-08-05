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
        const name = author.username.split("@")[0];
        const initial = author.username.slice(0, 1).toUpperCase();
        return (
            <div>
                <NavbarContainer />
                <div className="story-show">
                    <h1>{story.title}</h1>
                    <div className="user-info">
                        <span className="user-initial">{initial}</span>
                        <span>{name}</span>
                    </div>
                    <p className="story-body">{story.body}</p>
                </div>
            </div>
        )
    }
}

export default Story;