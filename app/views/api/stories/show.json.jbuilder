json.partial! "api/stories/story", story: @story

json.photoUrl url_for(@story.photo)