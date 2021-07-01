class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :show, :create, :login, :set_user]

    def index
        users = User.all
        render json: users
    end

    def show
        render json: @user
    end

    def create
        user = User.new(user_params)
        # puts user
        if user .save
            token = encode_token({ user_id: user.id })
            render json: { user: UserSerializer.new(user), jwt: token }
        else
            render json: { error: user.errors }, status: :unauthorized
        end
    end

    def destroy
        @user.destroy
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = encode_token(user_id: user.id)
            render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
        else
            render json: {error: "Incorrect username or password"}, status: :unauthorized
        end
    end

    private

    def set_user
        user = User.find(decoded_token["user_id"])
        # puts user
        if user
            render json: {user: UserSerializer.new(user)}, status: :accepted
        end
    end

    def user_params
        params.permit(
            :username, 
            :email, 
            :password,
            :first_name,
            :last_name,
            :bio,
            :avatar,
            :latitude,
            :longitude,
            :float,
            :bio_video,
            :bio_image,
            :banner,
            :page_name,
            :is_creator,
        )
    end
end
