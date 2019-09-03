import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Featured extends React.Component{


    render() {
        const {users} = this.props;
        const coverStoryLeft = this.props.stories.slice(0, 1).map(story => {
            const author = users[story.author_id].username.split("@")[0]
            const description = story.body.slice(0, 100) + "...";
            return (
                <div className="cover-big" key={story.id}>
                    <Link to={`/story/${story.id}`} className="route-link"><img className="big-photo" src={story.photoUrl} alt="bigCoverPhoto" />
                        <div className="feature-post-content">
                            <h1 className="cover-big-header">{story.title}</h1>
                            <p className="splash-description featured-left-description">{description}</p>
                        </div>   
                    </Link>
                        {/* <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link> */}
                    <div className="author-splash-info">
                        <Link to={`/users/${users[story.author_id].id}/profile`} className="author-name"><p className="author-name">{author}</p></Link> 
                        <img className="star-img" src={window.starUrl} alt="star.png" />
                        <p>{story.date}</p>
                    </div>
                </div>
            )
        });

        const coverStories = this.props.stories.slice(1, 4).map(story => {
            const author = users[story.author_id].username.split("@")[0];
            return (
                <div className="cover-story" key={story.id}>
                    <Link to={`/story/${story.id}`} className="route-link"><img className="feature-cover-photo" src={story.photoUrl} alt="coverStoryPhoto" /></Link>
                    <div className="mid-post-content">
                        <Link to={`/story/${story.id}`} className="route-link"><h1 className="cover-story-header">{story.title}</h1></Link>
                        {/* <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link> */}
                        {/* <div className="author-splash-info"> */}
                            <Link to={`/users/${users[story.author_id].id}/profile`} className="author-name"><p className="author-name">{author}</p></Link>
                            {/* <img className="star-img" src={window.starUrl} alt="star.png" /> */}
                            <p>{story.date}</p>
                        {/* </div> */}
                    </div>
                </div>
            )
        })

        const coverStoryRight = this.props.stories.slice(4, 5).map(story => {
            const author = users[story.author_id].username.split("@")[0];
            const description = story.body.slice(0, 40) + "...";
            return (
                <div className="cover-big" key={story.id}>
                    <Link to={`/story/${story.id}`} className="route-link">
                        <img className="big-photo" src={story.photoUrl} alt="bigCoverPhoto" />
                        <h1 className="cover-big-header">{story.title}</h1>
                        <p className="splash-description">{description}</p>
                    </Link>
                    {/* <Link to={`users/${users[story.author_id].id}/stories`}>{author}</Link> */}
                    <div className="author-splash-info">
                        <Link to={`/users/${users[story.author_id].id}/profile`} className="author-name"><p className="author-name">{author}</p></Link>
                        <img className="star-img" src={window.starUrl} alt="star.png" />
                        <p>{story.date}</p>
                    </div>
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