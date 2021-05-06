Rails.application.routes.draw do
  root "channels#index"
  resources :channels
  scope :api, module: "api" do
    resource :streaming, only: :update
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
