import { connect } from 'react-redux';
import ProfileResponses from './profile_responses';
import { fetchUserResponses } from '../../actions/response_actions';

const msp = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    const responses = Object.values(state.entities.responses);
    return {
        user,
        responses,
    }
}

const mdp = dispatch => {
    return {
        fetchUserResponses: id => dispatch(fetchUserResponses(id)),
    }
};

export default connect(msp, mdp)(ProfileResponses);