import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchUserStories(this.props.match.params.userId);
        this.props.fetchFollowInfo(this.props.match.params.userId);
    }

    // componentDidUpdate(prev){
    //     if(prev.props.match.params.userId !== )
    // }

    render(){
        const { user, stories, following, followers } = this.props;
        if (!user || !stories) {
            return null;
        }
       debugger
        const followingLength = following.length;
        const followersLength = followers.length;

        const initial = user.username.slice(0, 1).toUpperCase();
            const profileStories = stories.map( (story, idx) => {
                const description = story.body.slice(0, 30) + "...";
                return(
                    <li className="profile-story" key={story.title + idx}>
                        <p className="author-name">{user.username}</p>
                        <div className="profile-story-content">
                            <Link to={`/story/${story.id}`} className="route-link">
                                <img className="profile-pic" src={story.photoUrl} />
                                <h1 className="pro-story-title">{story.title}</h1>
                                <h2 className="story-teaser">{description}</h2>
                            </Link>
                        </div>
                    </li>
                )
            });
        return (
            <div>
                <div className="profile">
                    <div className="nav-holder">
                        <NavbarContainer/>
                    </div>
                    <div className="user-container">
                        <div className="user-info">
                            <h1>{user.username}</h1>
                            <h4>{followersLength} followers</h4>
                            <h4>{followingLength} following</h4>
                            <p className="atmo-member">atmosphere member since 2019</p>

                        </div>
                        <div className="user-initial profile-initial">{initial}</div>
                    </div> 
                    </div>
                        <ul className="profile-stories-list">
                            {profileStories}
                        </ul>
            </div>
        )
    }
}

export default Profile;