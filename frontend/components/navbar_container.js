
import { connect } from 'react-redux';
import Navbar from './navbar';
import { openModal } from '../actions/modal_actions';

const mdp = dispatch => {
    
    return {
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(null, mdp)(Navbar);

