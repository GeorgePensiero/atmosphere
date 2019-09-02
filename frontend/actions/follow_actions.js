import * as FollowUtils from '../util/follows_api_util';
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";

export const fetchFollowInfo = userId => dispatch => {
    return FollowUtils.fetchFollowInfo(userId)
        .then(payload => dispatch(receiveFollowInfo(payload)))
        // err => dispatch(receiveFollowErrors(err.responseJSON)));
}

export const createFollow = userId => dispatch => {
    debugger
    return FollowUtils.createFollow(userId)
        .then(user => dispatch(follow(user)))
        // err => dispatch(receiveFollowErrors(err.responseJSON)));
}

export const unFollow = userId => dispatch => {
    return FollowUtils.unFollow(userId)
        .then(user => dispatch(unfollow(user)));
}

const follow = user => {
    return {
        type: FOLLOW,
        user
    }
}

const unfollow = user => {
    return {
        type: UNFOLLOW,
        user
    }
}
