class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    
        if @user.save
            login(@user)
            render :show
        else
            
            render json: @user.errors.full_messages, status: 422
        end
    end

    def followers
        @user = User.find(params[:id])
        @followers = @user.followers
        render "api/users/followers"
    end

    def followees
        @user = User.find(params[:id])
        @followees = @user.followees
        render "api/users/followees"
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
