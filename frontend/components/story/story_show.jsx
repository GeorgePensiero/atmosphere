import React from 'react';

class Story extends React.Component{

    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId)
    }

    render(){
        return (
            
        )
    }
}