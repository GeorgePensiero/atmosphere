import { connect } from 'react-redux';
import { fetchPost } from '../../actions/story_actions';

const msp = (state, ownProps) => {
    const story = state.entities.stories[ownProps.match.params.id];
    const author = state.entities.users[story.author_id];
    return {
        story, 
        author,
    }
}

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
    }
}