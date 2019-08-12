json.users do 
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

end