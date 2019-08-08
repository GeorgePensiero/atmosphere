import React from 'react';
import { Link } from 'react-router-dom';
class SplashLeft extends React.Component{

    render(){
        const {users, stories} = this.props;
            const splash_stories = stories.map((story, idx) => {
            const description = story.body.slice(0, 150) + "...";
            const author = users[story.author_id].username.split("@")[0];
            return(
                <li className="splash-left-story" key={story.title + idx}>
                    <div className="bottompost-content">
                        <Link to={`/story/${story.id}`} className="route-link">
                            <h2>{story.title}</h2>
                            <p className="splash-description">{description}</p>
                        </Link>
                        <Link to={`/users/${users[story.author_id].id}/profile`} className="author-name"><p className="author-name splash-left-author">{author}</p></Link>
                    </div>
                    <Link to={`/story/${story.id}`} className="route-link"><img className="splashleft-img" src={story.photoUrl} alt="storyphoto"/></Link>
                </li>
            )
        })

        return (
            <ul className="bottom-splash-stories">
                {splash_stories}
            </ul>
        )
    }

}

export default SplashLeft;