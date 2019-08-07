
export const fetchAllResponses = storyId => {
    return $.ajax({
        method: "get",
        url: `api/stories/${storyId}/responses`,
    });
};

export const fetchResponse = (storyId, id) => {
    return $.ajax({
        method: "get",
        url: `api/stories/${storyId}/responses/${id}`,
    });
};

export const createResponse = (storyId, response) => {
    return $.ajax({
        method: "post",
        url: `api/stories/${storyId}/responses`,
        data: { response },
    });
};

export const editResponse = (storyId, response) => {
    return $.ajax({
        method: "patch",
        url: `api/stories/${storyId}/responses/${response.id}`,
        data: { response },
    });
};

export const deleteResponse = (storyId, id) => {
    return $.ajax({
        method: "delete",
        url: `api/stories/${storyId},responses/${id}`,
    });
};

