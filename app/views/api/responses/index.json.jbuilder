json.responses do 
    @responses.each do |response|
        json.set! response.id do 
            json.partial! "api/responses/response", response: response
        end
    end
end


json.story do 
    json.partial! "api/stories/story", story: @story
end

json.users do 
    @responses.each do |response|
        json.set! response.author.id do
            json.partial! "api/users/user", user: response.author
        end
    end
end