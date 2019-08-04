import { connect } from 'react-redux';
import UserStories from './stories_index';
import { fetchUserStories, editStory, removeStory } from '../../actions/story_actions';

const msp = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    const stories = Object.values(state.entities.stories);
    return {
        user,
        stories,
    };
};

const mdp = dispatch => {
    return {
        fetchUserStories: id => dispatch(fetchUserStories(id)),
        editStory: story => dispatch(editStory(story)),
        removeStory: id => dispatch(removeStory(id)),
    };
};


export default connect(msp, mdp)(UserStories);