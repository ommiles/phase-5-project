Rails.application.routes.draw do
  resources :subscriptions
  resources :comments
  resources :posts
  resources :users
end
