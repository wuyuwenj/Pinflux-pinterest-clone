Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index,:create] do
      resources :boards, only: [:index]
    end
    resource :session, only: [:show, :create, :destroy]
    resources :boards, only: [ :show, :create, :update, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :pin_board_relations, only: [:create]
    get '/users/:user_id/boards/name/:name', to: 'boards#find_by_name', as: 'find_by_name'

  end
  

  get '*path', to: "static_pages#frontend_index"
end