Rails.application.routes.draw do
  resources :membership_levels
  resources :creators
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
