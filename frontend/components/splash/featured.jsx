import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component{

    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        const {users} = this.props;
        const coverStoryBig = this.props.stories.slice(0, 1).map(story => {
            const author = users[story.author_id].username.split("@")[0]
            const description = story.body.slice(0, 100) + "...";
            return (
                <div className="cover-big" key={story.id}>
                    <img id="big-photo" src={story.photoUrl} alt="bigCoverPhoto"/>
                    <h1 className="cover-big-header">{story.title}</h1>
                    <span className="cover-big-description">{description}</span>
                    <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link>
                </div>
            )
        });

        const coverStories = this.props.stories.slice(1, 4).map(story => {
            const author = users[story.author_id].username.split("@")[0];
            return (
                <div className="cover-story" key={story.id}>
                    <h1 className="cover-story-header">{story.title}</h1>
                    <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link>
                </div>
            )
        })

        return (
            <div className="featured">
                <div className="featured-left">
                    {coverStoryBig}
                </div>
                <div className="featured-right">
                    {coverStories}
                </div>
            </div>
        )
    }
}

export default Featured;