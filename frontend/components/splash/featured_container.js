import { connect } from 'react-redux';
import Featured from './featured';

const msp = ({entities}) => {
    return {
        stories: Object.values(entities.stories),
        users: entities.users,
    };
};

const mdp = dispatch => {
    return {
        fetchAllStories: () => dispatch(fetchAllStories()),
    };
};

export default connect(msp, mdp)(Featured);