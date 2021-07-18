Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show, :update, :destroy]
      resources :posts
      resources :subscriptions
      resources :comments
      post '/login', to: 'users#login'
      get '/profile', to: 'users#profile'
      post '/posts/:id', to: 'posts#show'
      get '/:username', to: 'users#show'
      get '/password/reset', to: 'users#password_reset'
      post '/password/reset', to: 'users#password_reset'
    end
  end
end
