json.user do 
    json.partial! "api/users/user", user: @user
end

json.responses do 
    @responses.each do |response|
        json.set! response.id do 
            json.extract! response, :id, :body, :author_id
        end
    end
end

json.stories do 
    @responses.each do |response| 
        json.partial! "api/stories/story", story: response.story
    end
end