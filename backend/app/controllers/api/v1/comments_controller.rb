class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :show]

    def index; end
    def show; end
    def create; end
    def update; end
    def destroy; end
    def set_comment; end
    def comment_params; end
end
