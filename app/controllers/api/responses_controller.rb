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
        @story = Story.find(params[:story_id])
        @responses = @story.responses.includes(:author)
    end

    def destroy
        @response = Response.find(params[:id])
        @response.destroy
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

    private

    def response_params
        params.require(:response).permit(:body)
    end
end
