json.users do 
    json.partial! "api/users/user", user: @user
    json.follower_count @user.followers.count
    json.following_count @user.following.count
    json.followers @user.followers
end

json.stories do 
    @stories.each do |story|
        json.set! story.id do 
            json.extract! story, :id, :title, :body, :author_id
            if(story.photo)
                json.photoUrl url_for(story.photo)
            end
        end
    end
end

