import React from 'react';

class Featured extends React.Component{

    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        const {users} = this.props;
        const coverStoryBig = this.props.stories.slice(0, 1).map(story => {
            const user = users[story.author_id]
            return (
                <div className="cover-big" key={story.id}>
                    <h1 className="cover-big-header">{story.title}</h1>
                    <span className="cover-big-description">{story.body}</span>
                    <p className="cover-big-author">{user.username}</p>
                </div>
            )
        });

        const coverStories = this.props.stories.slice(1, 4).map(story => {
            
            return (
                <div className="cover-story" key={story.id}>
                    <h1 className="cover-story-header">{story.title}</h1>
                    <span className="cover-story-description">{story.body}</span>
                    <p className="cover-story-author">{users[story.author_id].username}</p>
                </div>
            )
        })

        return (
            <div className="featured">
                <section className="featured-left">
                    {coverStoryBig}
                </section>
                <section className="featured-right">
                    {coverStories}
                </section>
            </div>
        )
    }
}

export default Featured;