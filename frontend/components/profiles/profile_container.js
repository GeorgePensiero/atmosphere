import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUserStories } from '../../actions/story_actions';
import { fetchFollowInfo, unFollow } from '../../actions/follow_actions';
// import {createFollow } from '../../util/follows_api_util';

const msp = (state, ownProps) => {
    const defaultUser = {username: "", password: ""};
    const user = state.entities.users[ownProps.match.params.userId] || defaultUser;
    const defaultStories = [];
    const stories = Object.values(state.entities.stories) || [];
    const currentUser = state.entities.users[state.session.id];
    // const followObj = state.entities.follows.following || {};
    // const followerObj = state.entities.follows.followers || {};
    // const following = Object.values(followObj);
    // const followers = Object.values(followerObj);
    return {
        user,
        stories,
        // following, 
        // followers,
        currentUser
    };
}

const mdp = dispatch => {
    return {
        fetchUserStories: id => dispatch(fetchUserStories(id)),
        fetchFollowInfo: userId => dispatch(fetchFollowInfo(userId)),
        // createFollow: userId => dispatch(createFollow(userId)),
        unFollow: (userId, id) => dispatch(unFollow(userId, id)),
    }
}

export default connect(msp, mdp)(Profile);