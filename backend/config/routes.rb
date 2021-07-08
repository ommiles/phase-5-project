Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update, :destroy]
      resources :posts
      resources :subscriptions
      resources :comments
      # get '/profile', to: 'users#show'
      post '/login', to: 'users#login'
      # post '/users', to: 'users#create'
      # the users#show action works with or without the below route:
      post '/posts/:id', to: 'posts#show'
      get '/:username', to: 'users#show'
      get '/profile', to: 'users#profile'
    end
  end
end
