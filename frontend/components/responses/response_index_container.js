import { connect } from 'react-redux';
import ResponseIndex from './response_index';

const msp = (state , ownProps) => {
    const { stories, responses, users} = state.entities;
    const story = stories[ownProps.match.params.id];
    return {
        story,
        responses,
        users,
    }
}

const mdp = dispatch => {
    return {
        fetchAllResponses: storyId => dispatch(fetchAllResponses(storyId)),
    }
}

export default connect(msp, mdp)(ResponseIndex);