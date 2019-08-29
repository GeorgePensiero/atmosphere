json.followers do 
    @followers.each do |follower|
        # json.set! follower.id do 
        #     json.partial! "api/users/user", user: follower 
        # end
        json.id follower.id
    end
end

json.following do 
    @following.each do |following|
        # json.set! following.id do 
        #     json.partial! "api/users/user", user: following
        # end
        json.id following.id
    end
end