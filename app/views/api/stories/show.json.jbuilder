json.story do 
    json.partial! "api/stories/story", story: @story
    json.photoUrl url_for(@story.photo)
    json.num_responses @story.responses.length
end

json.user do 
    json.partial! "api/users/user", user: @user
end
