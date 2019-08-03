import React from 'react';

class Featured extends React.Component{

    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        const {users} = this.props;
        const coverStoryBig = this.props.stories.slice(0, 1).map(story => {
            const author = users[story.author_id].username.split("@")[0]
            return (
                <div className="cover-big" key={story.id}>
                    <h1 className="cover-big-header">{story.title}</h1>
                    <span className="cover-big-description">{story.body}</span>
                    <p className="cover-big-author">{author}</p>
                </div>
            )
        });

        const coverStories = this.props.stories.slice(1, 4).map(story => {
            const author = users[story.author_id].username.split("@")[0]
            return (
                <div className="cover-story" key={story.id}>
                    <h1 className="cover-story-header">{story.title}</h1>
                    <p className="cover-story-author">{author}</p>
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