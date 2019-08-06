import React from 'react';
// import NavbarContainer from '../navbar/navbar_container';

class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchUserStories(this.props.user.id);
    }

    render(){
        const { user, stories } = this.props;
        const initial = user.username.slice(0, 1).toUpperCase();
            const profileStories = stories.map( story => {
                const description = story.body.slice(0, 30) + "...";
                return(
                    <li className="profile-story">
                        <span>{user.username}</span>
                        <div className="profile-story-content">
                            <img className="profile-pic" src={story.photoUrl} />
                            <h1 className="pro-story-title">{story.title}</h1>
                            <h2 className="story-teaser">{description}</h2>
                        </div>
                    </li>
                )
            });
        return (
            <div className="profile">
                {/* <NavbarContainer /> */}
                <div className="user-container">
                    <div className="user-info">
                        <h1>{user.username}</h1>
                    </div>
                    <div className="user-initial profile-initial">{initial}</div>
                </div>
                    <ul className="profile-stories-list">
                        {profileStories}
                    </ul>
            </div> 
        )
    }
}

export default Profile;