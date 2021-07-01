class Api::V1::SubscriptionsController < ApplicationController
    before_action :set_subscription, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :show]

    def index
        subscriptions = Subscription.all
        render json: subscriptions
    end

    def show
        render json: @subscription
    end
    
    def create
        subscription = Subscription.new(subscription_params)

        if subscription.save
            render json: subscription, status: :created
        else 
            render json: {error: subscription.errors}, status: :unprocessable_entity
        end
    end

    def update
        if @subscription.update(subscription_params)
            render json: @subscription
        else
            render json: {error: @subscription.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        @subscription.destroy
    end

    def set_subscription
        @subscription = Subscription.find(params[:id])
    end

    def subscription_params
        params.require(:subscription).permit(:subscriber_id, :subscribee_id, :cost, :title, :img_url, :membership_level, :subscription_status)
    end
end
