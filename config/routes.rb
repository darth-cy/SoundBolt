Rails.application.routes.draw do
  root to: "static_pages#index"
  resources :static_pages

  resources :users
  resource :session, only: [:create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update, :create, :destroy] do
      resources :streams, only: [:index]
      resources :tracks, only: [:tracks]
    end
    resources :tracks, only: [:index, :show, :new, :create]
  end
end
