json.extract! user, :id, :username
json.following current_user.following.include?(@user) if logged_in?
