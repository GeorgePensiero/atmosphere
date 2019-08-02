@stories.each do |story|  
    json.set! story.id do 
        json.extract! story, :id, :title, :body, :author_id
    end
end


