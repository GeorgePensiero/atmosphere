import * as StoryUtils from '../util/story_api_util';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_STORY_ERRORS = "RECEIVE_STORY_ERRORS";
export const DELETE_STORY = "DELETE_STORY";
export const RECEIVE_USER_STORIES = "RECEIVE_USER_STORIES";

export const fetchAllStories = () => dispatch => {
    return StoryUtils.fetchAllStories()
        .then(payload => dispatch(receiveAllStories(payload)),
        err => dispatch(receiveStoryErrors(err.responseJSON)));
};

export const fetchUserStories = id => dispatch => {
    return StoryUtils.fetchUserStories(id)
        .then(payload =>  dispatch(receiveUserStories(payload)),
        err => dispatch(receiveStoryErrors(err.responseJSON)));
};


export const createStory = story => dispatch => {
    return StoryUtils.createStory(story)
        .then(story => dispatch(receiveStory(story)),
        err => dispatch(receiveStoryErrors(err.responseJSON)));
};

export const fetchStory = id => dispatch => {
    return StoryUtils.fetchStory(id)
        .then(payload => dispatch(receiveStory(payload)),
        err => dispatch(receiveStoryErrors(err.responseJSON)));
};

export const editStory = story => dispatch => {
    return StoryUtils.editStory(story)
        .then(story => dispatch(receiveStory(story)),
        err => dispatch(receiveStoryErrors(err.responseJSON)));
};

export const removeStory = id => dispatch => {
    return StoryUtils.deleteStory(id)
        .then(payload => dispatch(deleteStory(payload.story.id)),
        err => dispatch(receiveStoryErrors(err.responseJSON)));
};

const deleteStory = id => {
    return {
        type: DELETE_STORY,
        storyId: id,
    };
};

const receiveStoryErrors = errors => {
    return {
        type: RECEIVE_STORY_ERRORS,
        errors,
    }
}

const receiveStory = ({story, user}) => {
    return {
        type: RECEIVE_STORY,
        story,
        user,
    };
};

const receiveAllStories = ({stories, users}) => {
    return {
        type: RECEIVE_ALL_STORIES,
        stories,
        users,
    };
};

const receiveUserStories = ({stories, users}) => {
    return {
        type: RECEIVE_USER_STORIES,
        stories,
        users,
    }
}
