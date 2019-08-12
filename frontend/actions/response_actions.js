import * as ResponseUtils from '../util/response_api_utils';
export const RECEIVE_ALL_RESPONSES = "RECEIVE_ALL_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const RECEIVE_RESPONSE_ERRORS = "RECEIVE_RESPONSE_ERRORS";
export const DELETE_RESPONSE = "DELETE_RESPONSE";
export const RECEIVE_USER_RESPONSES = "RECEIVE_USER_RESPONSES";

export const fetchAllResponses = storyId => dispatch => {
    return ResponseUtils.fetchAllResponses(storyId)
        .then(payload => {
            
            dispatch(receiveAllResponses(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON))});
}

export const fetchUserResponses = userId => dispatch => {
    return ResponseUtils.fetchUserResponses(userId)
        .then(payload => dispatch(receiveUserResponses(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const fetchResponse = (storyId, id) => dispatch => {
    return ResponseUtils.fetchResponse(storyId, id)
        .then(payload => dispatch(receiveResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const createResponse = (storyId, response) => dispatch => {
    return ResponseUtils.createResponse(storyId, response)
        .then(response => dispatch(receiveResponse(response)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const removeResponse = (storyId, id) => dispatch => {
    return ResponseUtils.deleteResponse(storyId, id)
        .then(payload => dispatch(deleteResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const updateResponse = (storyId, response) => dispatch => {
    return ResponseUtils.updateResponse(storyId, response)
        .then(payload => dispatch(receiveResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}




const receiveResponse = response => {
    return {
        type: RECEIVE_RESPONSE,
        response,
    }
} 

const receiveAllResponses = ({responses = {}, story, users}) => {
    
    return {
        type: RECEIVE_ALL_RESPONSES,
        responses,
        story, 
        users,
    }
}

const receiveUserResponses = ({responses = {}, user, stories}) => {

    return {
        type: RECEIVE_USER_RESPONSES,
        responses,
        stories,
        user
    }
}


const deleteResponse = ({response, user}) => {
    return {
        type: DELETE_RESPONSE,
        response,
        user,
    }
}

const receiveResponseErrors = errors => {
    return{
        type: RECEIVE_RESPONSE_ERRORS,
        errors,
    }
}