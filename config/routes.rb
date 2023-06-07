Rails.application.routes.draw do
  namespace :api do
  # get '/customers/punchcard_length/:n', to: 'customers#punchcard_length'
  # get 'customers/count/:n', to: 'customers#count'
    # get '/count/:n', to: 'customers#count'
    
    resources :punchcards
    resources :customers 

    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end