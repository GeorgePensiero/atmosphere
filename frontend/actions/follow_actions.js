import * as FollowUtils from '../util/follows_api_util';
export const RECEIVE_FOLLOW_INFO = "RECEIVE_FOLLOW_INFO";

export const fetchFollowInfo = userId => dispatch => {
    return FollowUtils.fetchFollowInfo(userId)
        .then(payload => dispatch(receiveFollowInfo(payload)))
        // err => dispatch(receiveFollowErrors(err.responseJSON)));
}

// export const createFollow = userId => dispatch => {
//     debugger
//     return FollowUtils.createFollow(userId)
//         .then(payload => dispatch(receiveFollowInfo(payload)))
//         // err => dispatch(receiveFollowErrors(err.responseJSON)));
// }

export const unFollow = (userId, id) => dispatch => {
    return FollowUtils.unFollow(userId, id)
        .then(payload => dispatch(receiveFollowInfo(payload)));
}
// const receiveFollowInfo = (info) => {
//     return {
//         type: RECEIVE_FOLLOW_INFO,
//         info,
//     };
// };

