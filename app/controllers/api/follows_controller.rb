class Api::FollowsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @following = @user.following
        @followers = @user.followers
        render "api/follows/index"
    end

    def create
    end

    def destroy
    end

    private
    
end
