Rails.application.routes.draw do
  resources :punchcards
  resources :customers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  resources :users

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
