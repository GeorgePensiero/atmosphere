import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component{


    render() {
        const {users} = this.props;
        const coverStoryLeft = this.props.stories.slice(0, 1).map(story => {
            const author = users[story.author_id].username.split("@")[0]
            const description = story.body.slice(0, 100) + "...";
            return (
                <div className="cover-big" key={story.id}>
                    <img className="big-photo" src={story.photoUrl} alt="bigCoverPhoto"/>
                    <div className="feature-post-content">
                        <h1 className="cover-big-header">{story.title}</h1>
                        <p className="cover-big-description">{description}</p>
                        {/* <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link> */}
                        <p className="author-name">Written by {author}</p>
                    </div>
                </div>
            )
        });

        const coverStories = this.props.stories.slice(1, 4).map(story => {
            const author = users[story.author_id].username.split("@")[0];
            return (
                <div className="cover-story" key={story.id}>
                    <img className="feature-cover-photo" src={story.photoUrl} alt="coverStoryPhoto"/>
                    <div className="mid-post-content">
                        <h1 className="cover-story-header">{story.title}</h1>
                        {/* <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link> */}
                        <p className="author-name">Written by {author}</p>
                    </div>
                </div>
            )
        })

        const coverStoryRight = this.props.stories.slice(4, 5).map(story => {
            const author = users[story.author_id].username.split("@")[0];
            const description = story.body.slice(0, 40) + "...";
            return (
                <div className="cover-big" key={story.id}>
                    <img className="big-photo" src={story.photoUrl} alt="bigCoverPhoto" />
                    <h1 className="cover-big-header">{story.title}</h1>
                    <p className="cover-big-description">{description}</p>
                    {/* <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link> */}
                    <p className="author-name">Written by {author}</p>
                </div>
            )
        })

        return (
            <div className="featured">
                <div className="featured-left">
                    {coverStoryLeft}
                </div>
                <div className="featured-mid">
                    {coverStories}
                </div>
                <div className="featured-right">
                    {coverStoryRight}
                </div>
            </div>
        )
    }
}

export default Featured;