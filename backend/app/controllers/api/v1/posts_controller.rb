class Api::V1::PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :show]

    def index
        posts = Post.all
        render json: posts
    end

    def show
        render json: @post
    end
    
    def create
        post = Post.new(post_params)

        if post.save
            render json: post, status: :created
        else 
            render json: {error: post.errors}, status: :unprocessable_entity
        end
    end

    def update
        if @post.update(post_params)
            render json: @post
        else
            render json: {error: @post.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        @post.destroy
    end

    private

    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:user_id, :post_type, :image, :title, :post_content, :subheader, :membership_level, :listing)
    end
end
