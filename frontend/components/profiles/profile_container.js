import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUserStories } from '../../actions/story_actions';
import { fetchFollowInfo } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    const defaultUser = {username: "", password: ""};
    const user = state.entities.users[ownProps.match.params.userId] || defaultUser;
    const defaultStories = [];
    const stories = Object.values(state.entities.stories) || [];
    
    
    const followObj = state.entities.follows.following || {};
    const followerObj = state.entities.follows.followers || {};
    const following = Object.values(followObj);
    const followers = Object.values(followerObj);
    return {
        user,
        stories,
        following, 
        followers,
    };
}

const mdp = dispatch => {
    return {
        fetchUserStories: id => dispatch(fetchUserStories(id)),
        fetchFollowInfo: userId => dispatch(fetchFollowInfo(userId)),
    }
}

export default connect(msp, mdp)(Profile);