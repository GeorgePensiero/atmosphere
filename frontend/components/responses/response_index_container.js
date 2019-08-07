import { connect } from 'react-redux';
import ResponseIndex from './response_index';
import { fetchAllResponses } from '../../actions/response_actions';

const msp = (state , ownProps) => {
    const { stories, users} = state.entities;
    const story = stories[ownProps.match.params.storyId];
    const responses = Object.values(state.entities.responses);
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