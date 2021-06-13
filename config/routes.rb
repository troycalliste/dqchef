Rails.application.routes.draw do
  resources :images
  resources :ratings
  resources :carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :gallery_images
  resources :descriptions
  get 'contact/create'
  get 'carts/show'
  resources :products
  resources :order_items
  resources :contacts
  resource :carts, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
get "/", to: "static#newhome"
get "/lunch", to: "static#lunch"
get "/dinner", to: "static#dinner"
get "/dishes", to: "static#dishes"
get "/desserts", to: "static#desserts"
get "/catering", to: "static#catering"
get "/home", to: "static#home"
post "/", to: "ratings#create"
get "/complete", to: "static#complete"
get "/contact", to: "static#newcontact"
get "/services", to: "static#newservices"
get "/privatedining", to: "static#newprivatedining"
get "/menu", to: "static#menu"
get "/gallery", to: "static#gallery"
get "/about", to: "static#newabout"
get "/comingsoon", to: "static#comingsoon"
get "/fullmenu", to: "static#fullmenu"


end
