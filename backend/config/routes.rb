Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update, :destroy]
      resources :posts
      resources :subscriptions
      resources :comments
      # get '/profile', to: 'users#show'
      post '/login', to: 'users#login'
      get '/profile', to: 'users#profile'
      # post '/users', to: 'users#create'
      # the users#show action works with or without the below route:
      post '/posts/:id', to: 'posts#show'
      get '/:username', to: 'users#show'
      get '/password/reset', to: 'users#password_reset'
      post '/password/reset', to: 'users#password_reset'
    end
  end
end
