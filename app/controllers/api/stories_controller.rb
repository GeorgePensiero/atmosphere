class Api::StoriesController < ApplicationController

    def index
        
        if params[:user_id]
            @user = User.find(params[:user_id])
            @stories = @user.stories
            render 'api/stories/userIndex'
        else
            @stories = Story.all.includes(:author)
            render :index
        end
    end

    def show
        @story = Story.find(params[:id])
    end

    def create
        @story = Story.new(story_params)
        @story.author_id = current_user.id
        if @story.save
            render :show
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    def update
        @story = Story.find(params[:id])
        if @story.update(story_params)
            render :show
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    def destroy
        @story = Story.find(params[:id])
        @story.destroy
        render :show
    end


    private

    def story_params
        params.require(:story).permit(:title, :body)
    end
end
