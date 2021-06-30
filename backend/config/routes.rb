Rails.application.routes.draw do
  resources :subscriptions
  resources :posts
  resources :comments
  resources :users
  
  # root 'products#index'
  
  # namespace :api do
  #   namespace :v1 do
  #     resources :users
  #     resources :posts
  #     resources :subscriptions
  #     resources :comments
  #     post '/login', to:  'users#login'
  #     get '/getuser', to: 'users#getuser'
  #   end
  # end
end
