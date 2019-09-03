export const LIKE = "LIKE";
export const RESPONSE_LIKE = "RESPONSE_LIKE";

import { likeStory } from '../util/story_api_util';
import { likeResponse } from '../util/response_api_utils';
export const likeStoryReq = storyId => dispatch => {
    return likeStory(storyId)
        .then(payload => dispatch(receiveLike(payload)))
}

export const likeResponseReq = (storyId, id) => dispatch => {
    return likeResponse(storyId, id)
        .then(response => dispatch(receiveResponseLike(response)))
}

const receiveLike = ({story, user}) => {
    return {
        type: LIKE,
        story,
        user,
    }
}

const receiveResponseLike = response => {
    return {
        type: RESPONSE_LIKE,
        response,
    }
}