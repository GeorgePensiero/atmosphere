import { connect } from 'react-redux';
import Profile from './profile';

const msp = (state, ownProps) => {
    const defaultUser = {username: "", password: ""};
    const user = state.entities.users[ownProps.match.params.userId] || defaultUser;
    const defaultStories = [];
    const stories = Object.values(state.entities.stories) || [];
    return {
        user,
        stories,
    };
}

const mdp = dispatch => {
    return {
        fetchUserStories: id => dispatch(fetchUserStories(id)),
    }
}

export default connect(msp, mdp)(Profile);