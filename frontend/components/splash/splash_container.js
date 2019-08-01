import { connect } from 'react-redux';

const msp = ({stories}) => {
    return {
        stories: Object.values(stories),
    };
};

const mdp = dispatch => {
    return {
        fetchAllStories: () => dispatch(fetchAllStories()),
    };
};