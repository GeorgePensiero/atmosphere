import * as ResponseUtils from '../util/response_api_utils';
export const RECEIVE_ALL_RESPONSES = "RECEIVE_ALL_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const RECEIVE_RESPONSE_ERRORS = "RECEIVE_RESPONSE_ERRORS";

export const fetchAllResponses = storyId => {
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
        .then(payload => dispatch(receiveAllResponses(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

export const deleteResponse = (storyId, id) => {
    return ResponseUtils.deleteResponse(storyId, id)
        .then(payload => dispatch(receiveAllResponses(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}


const receiveResponse = ({ response, responses, author}) => {
    return {
        response,
        responses,
        author,
    }
} 
const receiveAllResponses = ({responses, story, users}) => {
    return {
        responses,
        story, 
        users,
    }
}