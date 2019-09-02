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
        .then(payload => dispatch(follow(payload)))
        // err => dispatch(receiveFollowErrors(err.responseJSON)));
}

export const unFollow = userId => dispatch => {
    return FollowUtils.unFollow(userId)
        .then(payload => dispatch(unfollow(payload)));
}

const follow = ({user, followStatus}) => {
    return {
        type: FOLLOW,
        user,
        followStatus
    }
}

const unfollow = ({user, followStatus}) => {
    return {
        type: UNFOLLOW,
        user, 
        followStatus,
    }
}
