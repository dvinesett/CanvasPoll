class Question < ApplicationRecord
    belongs_to :poll
    has_many :answers, dependent: :destroy
end
