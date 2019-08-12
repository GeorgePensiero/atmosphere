Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only:[:create] do
      resources :stories, only:[:index]
      resources :responses, only: [:index]
    end
    resource :session, only:[:create, :destroy]
    resources :stories, only:[:index, :create, :destroy, :update, :show] do 
      resources :responses, only:[:create, :show, :index, :destroy, :update]
    end
  end
end
