import { connect } from 'react-redux';
import { createFollow, unFollow } from '../../actions/follow_actions';
import FollowButton from './followButton';

const msp = ({entities: {users}, session}) => {
    return {
        currentUser: users[session.id] || {},
    }
}

const mdp = dispatch => {
    return {
        createFollow: userId => dispatch(createFollow(userId)),
        unFollow: userId => dispatch(unFollow(userId)),
    }
}

export default connect(msp, mdp)(FollowButton)