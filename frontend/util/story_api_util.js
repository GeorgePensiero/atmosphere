export const fetchAllStories = () => {
    return $.ajax({
        method: "get",
        url: "api/stories",
    });
};

export const fetchUserStories = id => {
    return $.ajax({
        method: "get",
        url: `api/users/${id}/stories`,
    });
};

export const createStory = story => {
    return $.ajax({
        method: "POST",
        url: "api/stories",
        data: { story },
    });
};

export const fetchStory = id => {
    return $.ajax({
        method: "GET",
        url: `api/stories/${id}`,
    });
};

export const editStory = story => {
    return $.ajax({
        method: "patch",
        url: `api/stories/${story.id}`,
        data: { story },
    });
};

export const deleteStory = id => {
    return $.ajax({
        method: "delete",
        url: `api/stories/${id}`
    });
};

export const likeStory = id => {
    return $.ajax({
        method: "post",
        url: `api/stories/${id}/likes`
    });
};

export const unlikeStory = id => {
    return $.ajax({
        method: "delete",
        url: `api/stories/${id}/likes`
    });
};