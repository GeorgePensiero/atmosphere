
import { connect } from 'react-redux';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = ({session, entities: {users} }) => {
    return {
        currentUser: users[session.id],
    }
}

const mdp = dispatch => {
    
    return {
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(Navbar);

