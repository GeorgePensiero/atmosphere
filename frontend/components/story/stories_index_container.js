import { connect } from 'react-redux';

const msp = ({session, users}) => {
    const currentUser = users[session.id];
    return {
        currentUser,
    }
};


export default connect(msp)(UserStories);