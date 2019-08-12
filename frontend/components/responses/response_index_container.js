import { connect } from 'react-redux';
import ResponseIndex from './response_index';
import { fetchAllResponses, createResponse, removeResponse } from '../../actions/response_actions';
import { openModal } from '../../actions/modal_actions';

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
        removeResponse: (storyId, id) => dispatch(removeResponse(storyId, id)),
        openModal: modal => dispatch(openModal(modal)),
    }
}

export default connect(msp, mdp)(ResponseIndex);