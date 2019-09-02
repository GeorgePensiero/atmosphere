import { editStory, fetchStory } from "../../actions/story_actions";
import StoryForm from "./story_form";
import { connect } from "react-redux";
import React from 'react';

const msp = (state, ownProps) => {
    const defaultStory = { title: "", body: ""};
    const story = state.entities.stories[ownProps.match.params.storyId] || defaultStory;
    const author = state.entities.users[state.session.id];
    const errors = state.errors.stories;
    return { story, author, errors };
};

const mdp = dispatch => {
    return {
        fetchStory: id => dispatch(fetchStory(id)),
        submit: story => dispatch(editStory(story)), 
    };
};

class EditStoryForm extends React.Component {

    componentDidMount(){
        this.props.fetchStory(this.props.match.params.storyId);
    }
    
    render(){
        const {story, submit} = this.props;
        return (
            <StoryForm story={story} submit={submit} />
        );
    }
}

export default connect(msp, mdp)(EditStoryForm);