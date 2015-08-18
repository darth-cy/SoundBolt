Rails.application.routes.draw do
  root to: "static_pages#index"
  resources :static_pages

  resources :users
  resource :session, only: [:create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update, :create, :destroy] do
      resources :streams, only: [:index]
      resources :tracks, only: [:index]
    end

    resources :tracks, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index]
    end

    resources :comments
    resources :followings, only: [:index, :show, :create, :update, :destroy]

    resources :chategorizations, only: [:show, :create, :destroy]
    resources :genres, only: [:index, :show, :create, :destroy]

  end
end
