import React from 'react';
import { Link } from 'react-router-dom';

class UserStories extends React.Component{


    componentDidMount(){
        this.props.fetchUserStories(this.props.user.id);
    }

    render(){
        const stories = this.props.stories.map(story => {
            const description = story.body.slice(0, 250) + "...";

            return (
                <div className="story" key={story.id}>
                    <Link to={`/story/${story.id}`}>{story.title}</Link>
                    <p>{description}</p>
                </div>
            )
        })
        return (
            <div className="stories-main">
                <div className="stories-header">
                    <h1>Your stories</h1>
                    <Link to="/story/new">Write a story</Link>
                    <ul>
                        {stories}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserStories;