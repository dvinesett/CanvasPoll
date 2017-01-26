Rails.application.routes.draw do
  resources :user_answers
  
  resources :polls do
    resources :questions, shallow: true do
      resources :answers, shallow: true
    end
    
    get 'student', on: :collection, to: 'polls#index_student'
    get 'student', on: :member, to: 'polls#show_student'
  end
    
  root 'static_pages#home'
  post '/assessment/start', to: 'static_pages#home'
end


