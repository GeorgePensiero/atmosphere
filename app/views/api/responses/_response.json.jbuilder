json.extract! response, :id, :body, :author_id, :story_id, :parent_response_id
json.like_count response.likes.count
json.current_user_likes response.likes.where(liker_id: current_user.id).count if logged_in?