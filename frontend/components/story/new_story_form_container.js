import { connect } from 'react-redux';
import { createStory } from '../../actions/story_actions';
import StoryForm from './story_form';

const msp = state => {
    const { users } = state.entities;
    const { session } = state;
    return {
        story: { title: "", body: ""},
        author: users[session.id],
    };
};

const mdp = dispatch => {
    return {
        submit: story => dispatch(createStory(story)),
    };
};

export default connect(msp, mdp)(StoryForm);