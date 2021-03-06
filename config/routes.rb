Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only:[:create] do
      resources :stories, only:[:index]
      resources :responses, only: [:index]
      resources :follows, only: [:index, :create]
      delete '/follows/', :to => 'follows#destroy'
    end
    resource :session, only:[:create, :destroy]
    resources :stories, only:[:index, :create, :destroy, :update, :show] do 
      resources :responses, only:[:create, :show, :index, :destroy, :update]
      post '/likes', :to => 'stories#like'
      delete '/likes', :to => 'stories#unlike'
      post '/responses/:id/likes', :to => 'responses#like'
      delete '/responses/:id/likes', :to => 'responses#unlike'
    end
  end
end
