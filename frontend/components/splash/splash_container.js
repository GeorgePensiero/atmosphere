import { connect } from 'react-redux';
import Splash from './splash';
import { fetchAllStories } from '../../actions/story_actions';

const msp = ({ entities }) => {
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

export default connect(msp, mdp)(Splash);