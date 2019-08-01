import React from 'react';

class Splash extends React.Component {
    
    componentDidMount(){
        this.props.fetchAllStories();
    }
    
    render(){
      const coverStories = this.props.stories.slice(0, 5).map(story => {
        return (
            <div className="cover-story">
                <h1 className="cover-story-header">{story.title}</h1>
                <span className="cover-story-description">{story.body}</span>
                <p className="cover-story-author">{story.author}</p>
            </div>
        )
      });
        return (
            <div className="splash-page">
                <section className="featured">
                    <div>
                        {coverStories}
                    </div>
                </section>
            </div>
        )
    }
}

export default Splash;