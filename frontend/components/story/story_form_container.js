import { connect } from 'react-redux';
import { createStory } from '../../actions/story_actions';
import StoryForm from './story_form';

const msp = state => {
    const { users } = state.entities;
    const { session } = state;
    return {
        author: users[session.id],
        title: "",
        body: "", 
    };
};

const mdp = dispatch => {
    return {
        createStory: story => dispatch(createStory(story)),
    };
};

export default connect(msp, mdp)(StoryForm);