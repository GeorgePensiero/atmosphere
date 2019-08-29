class Api::FollowsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @following = @user.following
        @followers = @user.followers
        render "api/follows/index"
    end

    def create
        @user = User.find(params[:user_id])
        @follow = Follow.new
        @follow.followed_id = @user.id
        @follow.follower_id = current_user.id
        @follow.save
    end

    def destroy
        @user = User.find(params[:user_id])
        current_user.unfollow(@user)
        @following = @user.following
        @followers = @user.followers
        render "api/follows/index"
    end

    private
    
    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end
end
