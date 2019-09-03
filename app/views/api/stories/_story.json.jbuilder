json.extract! story, :id, :title, :body, :author_id
json.date story.created_at.strftime('%b %d, %Y')