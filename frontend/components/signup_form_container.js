import { signup, login } from "../actions/session_actions";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const msp  = ({errors}) => {
    return {
        errors: errors.session,
        formType: "Sign up ",
    }
}

const mdp = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        demoLogin: () => dispatch(login({username: "demo@demo.com", password: "password"})), 
    }
}

export default connect(msp, mdp)(SessionForm);