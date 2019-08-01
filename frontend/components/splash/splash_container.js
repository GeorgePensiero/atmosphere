import { connect } from 'react-redux';
import Splash from './splash';

const msp = ({entities}) => {
    return {
        stories: Object.values(entities.stories),
    };
};

const mdp = dispatch => {
    return {
        fetchAllStories: () => dispatch(fetchAllStories()),
    };
};

export default connect(msp, mdp)(Splash);