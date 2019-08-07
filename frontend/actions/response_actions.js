import * as ResponseUtils from '../util/response_api_utils';


export const fetchAllResponses = storyId => {
    return ResponseUtils.fetchAllResponses(storyId)
        .then(payload => dispatchEvent(receiveAllResponses(payload)),
        err => dispatch(receiveResponseErrors(err.responseJSON)));
}

const receiveAllResponses = ({responses, story, users}) => {
    return {
        responses,
        story, 
        users,
    }
}