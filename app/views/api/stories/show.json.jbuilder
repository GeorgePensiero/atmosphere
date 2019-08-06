
json.stories do 
    json.set! @story.id do 
        json.partial! "api/stories/story", story: @story
        json.photoUrl url_for(@story.photo)
    end
end

json.users do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end