Rails.application.routes.draw do
  resources :posts
  resources :comments
  resources :subscriptions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
