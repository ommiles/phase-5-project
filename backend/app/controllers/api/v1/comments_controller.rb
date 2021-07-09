class Api::V1::CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :show]

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        render json: @comment
    end

    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment, status: :created
        else 
            render json: {error: comment.errors}, status: :unprocessable_entity
        end
    end

    def update
        if @comment.update(edit_params)
            render json: @comment
        else
            render json: {error: @comment.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        @comment.destroy
        render json: @comment
    end

    private

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        # How to incorporate the timestamps into 
        params.require(:comment).permit(:user_id, :post_id, :comment_content)
    end
    
    def edit_params
        # How to incorporate the timestamps into 
        params.require(:comment).permit(:comment_content)
    end
end