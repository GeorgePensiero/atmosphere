json.stories do 
    @stories.each do |story|  
        debugger
        json.set! story.id do 
            json.extract! story, :id, :title, :body, :author_id
            if(story.photo)
                json.photoUrl url_for(story.photo)
            end
        end
    end
end

json.users do 
    @stories.each do |story|
        json.set! story.author.id do 
            json.partial! "api/users/user", user: story.author
        end
    end
end

