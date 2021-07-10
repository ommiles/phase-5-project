class Api::V1::UsersController < ApplicationController
    before_action :authorized, only: [:profile, :update]
    skip_before_action :authorized, only: [:index, :show, :create, :login, :password_reset, :destroy]

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end
    
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(params[:id])
        render json: user
        # render json: current_user
    end

    def create
        user = User.new(user_params)
        if user.save
            token = encode_token({ user_id: user.id })
            render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
        else
            render json: { error: user.errors }, status: :unauthorized
        end
    end

    def update
        user = User.find(params[:id])
        user.update(edit_params)
        if user.valid?
            token = encode_token({ user_id: user.id })
            render json: { user: UserSerializer.new(user), jwt: token}
        else
            render json: { error: 'Failed to edit user.' }, status: :not_acceptable
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = encode_token(user_id: user.id)
            render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
        else
            render json: {error: "Incorrect Username or password."}, status: :unauthorized
        end
    end
    
    def password_reset
        user = User.find_by(email: params[:email])
        if user.present?
            token = encode_token(user_id: user.id)
            render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
        else
            render json: {error: "User not found."}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(
            :username, 
            :email, 
            :password,
            :password_confirmation,
            :first_name,
            :last_name,
            :bio,
            :avatar,
            :latitude,
            :longitude,
            :bio_video,
            :bio_image,
            :banner,
            :page_name,
            :is_creator,
        )
    end

    def edit_params
        params.permit(:username, :email, :first_name, :last_name, :password, :password_confirmation)
    end
end
