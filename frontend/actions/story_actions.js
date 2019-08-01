import * as StoryUtils from '../util/story_api_util';

export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_STORY = "DELETE_STORY";

export const createStory = story => dispatch => {
    return StoryUtils.createStory(story)
        .then(story => dispatch(receiveStory(story)),
        err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchStory = id => dispatch => {
    return StoryUtils.fetchStory(id)
        .then(story => dispatch(receiveStory(story)),
        err => dispatch(receiveErrors(err.responseJSON)));
};

export const editStory = story => dispatch => {
    return StoryUtils.editStory(story)
        .then(story => dispatch(receiveStory(story)),
        err => dispatch(receiveErrors(err.responseJSON)));
};

export const removeStory = id => dispatch => {
    return StoryUtils.deleteStory(id)
        .then(story => dispatch(deleteStory(story.id)),
        err => dispatch(receiveErrors(err.responseJSON)));
};

const deleteStory = id => {
    return {
        type: REMOVE_STORY,
        storyId: id,
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    }
}

const receiveStory = story => {
    return {
        type: RECEIVE_STORY,
        story,
    };
};