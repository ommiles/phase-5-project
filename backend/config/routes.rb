Rails.application.routes.draw do
  # root 'users#index'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :posts
      resources :subscriptions
      resources :comments
      post '/login', to: 'users#login'
      post '/create', to: 'users#create'
      # get '/?', to: 'users#set_user'
    end
  end
end
