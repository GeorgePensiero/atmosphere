import * as ResponseUtils from '../util/response_api_utils';
export const RECEIVE_ALL_RESPONSES = "RECEIVE_ALL_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const RECEIVE_RESPONSE_ERRORS = "RECEIVE_RESPONSE_ERRORS";
export const DELETE_RESPONSE = "DELETE_RESPONSE";


export const fetchAllResponses = storyId => dispatch => {
    return ResponseUtils.fetchAllResponses(storyId)
        .then(payload => dispatch(receiveAllResponses(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const fetchResponse = (storyId, id) => {
    return ResponseUtils.fetchResponse(storyId, id)
        .then(payload => dispatch(receiveResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const createResponse = (storyId, response) => {
    return ResponseUtils.createResponse(storyId, response)
        .then(payload => dispatch(receiveResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const removeResponse = (storyId, id) => {
    return ResponseUtils.deleteResponse(storyId, id)
        .then(payload => dispatch(deleteResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const updateResponse = (storyId, response) => {
    return ResponseUtils.updateResponse(storyId, response)
        .then(payload => dispatch(receiveResponse(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}




const receiveResponse = ({ response, author}) => {
    return {
        type: RECEIVE_RESPONSE,
        response,
        author,
    }
} 
const receiveAllResponses = ({responses, story, users}) => {
    return {
        type: RECEIVE_ALL_RESPONSES,
        responses,
        story, 
        users,
    }
}


const deleteResponse = ({response, user, story}) => {
    return {
        type: DELETE_RESPONSE,
        response,
        user,
        story,
    }
}

const receiveResponseErrors = errors => {
    return{
        type: RECEIVE_RESPONSE_ERRORS,
        errors,
    }
}