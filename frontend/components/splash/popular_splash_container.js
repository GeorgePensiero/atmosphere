import { connect } from 'react-redux';
import Popular from './popular_splash';

const msp = ({ entities }) => {
    return {
        stories: Object.values(entities.stories),
        users: entities.users,
    };
};


export default connect(msp)(Popular);