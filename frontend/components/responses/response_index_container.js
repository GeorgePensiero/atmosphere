import { connect } from 'react-redux';
import ResponseIndex from './response_index';
import { fetchAllResponses, createResponse } from '../../actions/response_actions';

const msp = (state , ownProps) => {
    const { stories, users} = state.entities;
    const { session } = state;
    const story = stories[ownProps.match.params.storyId];

    const responses = Object.values(state.entities.responses);
    return {
        story,
        responses,
        users,
        session,
    }
}

const mdp = dispatch => {
    return {
        fetchAllResponses: storyId => dispatch(fetchAllResponses(storyId)),
        createResponse: (storyId, response) => dispatch(createResponse(storyId, response)),
    }
}

export default connect(msp, mdp)(ResponseIndex);