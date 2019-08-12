import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return {
        responses: state.entitites.responses,
    }
}