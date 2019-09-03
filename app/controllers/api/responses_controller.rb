class Api::ResponsesController < ApplicationController
    def create
        @response = Response.new(response_params)
        @response.author_id = current_user.id
        @response.story_id = params[:story_id]
        if @response.save 
            render "api/responses/show"
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    def index 
        if(params[:user_id])
            @user = User.find(params[:user_id])
            @responses = @user.responses
            render "api/responses/userIndex"
        else
            @story = Story.find(params[:story_id])
            @responses = @story.responses
            render "api/responses/index"
        end
    end

    def destroy
        @response = Response.find(params[:id])
        @response.destroy
        @story = Story.find(params[:story_id])
        @responses = @story.responses
        render "api/responses/index"
    end

    def update
        @response = Response.find(params[:id])
        if @response.update(response_params)
            render "api/responses/index"
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    def like
        @like = Like.new(likeable_type: "Response", likeable_id: params[:id], liker_id: current_user.id)
        @like.save!
        @response = Response.find(params[:id])
        render :show
    end

    private

    def response_params
        params.require(:response).permit(:body)
    end
end
