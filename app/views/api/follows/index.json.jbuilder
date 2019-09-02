
json.partial! "api/users/user", user: @user
json.follower_count @user.followers.count
json.following_count @user.following.count
