import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class UserStories extends React.Component{


    componentDidMount(){
        this.props.fetchUserStories(this.props.user.id);
    }

    render(){
        
        const stories = this.props.stories.map(story => {
            const description = story.body.slice(0, 250) + "...";
            return (
                <div className="user-story" key={story.id}>
                    <Link className="story-title" to={`/story/${story.id}`}>{story.title}</Link>
                    <p>{description}</p>
                    <Link className="edit-story" to={`/story/${story.id}/edit`}>Edit story</Link>
                    <button className="delete-story" onClick={() => this.props.removeStory(story.id)}>Delete Story</button>
                </div>
            )
        })
        return (
            <div>
                <div className="user-stories-main">
                    <div className="user-stories-header">
                        <h1>Your stories</h1>
                        <Link className="newstory-btn" to='/story/new'>Write a story</Link>
                    </div>
                        <ul className="user-stories">
                            {stories}
                        </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(UserStories);