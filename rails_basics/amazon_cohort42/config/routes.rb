Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get('/',{to: "welcome#home", as: :home})
  get('/about',{to: "welcome#about"})
  get('/contact',{to: "welcome#contact"})
  post("/contact_submit",{to:"welcome#thankyou",as: :contact_submit})
  get("/new_bill",{to:"bills#new_bill"})
  get("/bill", {to: 'bills#result', as: :bill})

  # Labs for rails CRUD
  get("/products",to:"products#index")
  get("/products/new",to:"products#new",as: :new_product)
  post("/products",to:"products#create")

  get("/products/:id",to:"products#show",as: :product)
  delete("/products/:id",to:"products#destroy")

  get("/products/:id/edit",to:"products#edit",as: :edit_product)
  patch("/products/:id",to:"products#update")
end
