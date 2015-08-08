Rails.application.routes.draw do
  root to: "static_pages#index"
  resources :static_pages
end
