import React from 'react';

class SplashLeft extends React.Component{

    componentDidMount(){
        this.props.fetchAllStories();
    }

    render(){
        const {users, stories} = this.props;
            const splash_stories = stories.map(story => {
            const description = story.body.slice(0, 150) + "...";
            const author = users[story.author_id].username.split("@")[0];
            return(
                <li className="splash-left-story">
                    <div className="bottompost-content">
                        <h2>{story.title}</h2>
                        <p className="splashleft-description">{description}</p>
                        <p>Written by {author}</p>
                    </div>
                    <img className="splashleft-img" src={story.photoUrl} alt="storyphoto"/>
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