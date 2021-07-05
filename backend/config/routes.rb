Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :posts
      resources :subscriptions
      resources :comments
      # get '/profile', to: 'users#show'
      post '/login', to: 'users#login'
      post '/create', to: 'users#create'
      # the users#show action works with or without the below route:
      # post '/users/:id', to: 'users#show'
      get '/:username', to: 'users#show'
      get '/set_user', to: 'users#set_user'
      # get '/:username/posts', to: 'users#posts'
    end
  end
end
