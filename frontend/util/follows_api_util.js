
export const fetchFollowInfo = userId => {
    return $.ajax({
        method: "get", 
        url: `api/users/${userId}/follows`
    })
};

export const createFollow = userId => {
    return $.ajax({
        method: "post",
        url: `api/users/${userId}/follows`
    })
};

export const unFollow = userId => {
    return $.ajax({
        method: "delete",
        url: `api/users/${userId}/follows/`
    })
};