json.extract! story, :id, :title, :body, :author_id
json.date story.created_at.strftime('%b %d, %Y')
json.like_count story.likes.count
json.current_user_likes story.likes.where(liker_id: current_user.id).count if logged_in?