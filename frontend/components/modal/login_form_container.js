import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const msp = ({errors}) => {
    return {
        errors: errors.session,
        formType: "Login ",
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal("signup"))}>
                Get Started
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: () => dispatch(login({ username: "demo@demo.com", password: "hunter2" })),
    }
}

export default connect(msp, mdp)(SessionForm);