import { signup } from "../actions/session_actions";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { openModal } from '../actions/modal_actions';
import React from 'react';

const msp  = ({errors}) => {
    return {
        errors: errors.session,
        formType: "Sign in ",
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
    }
}

export default connect(msp, mdp)(SessionForm);