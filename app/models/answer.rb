class Answer < ApplicationRecord
    belongs_to :question
    has_one :poll, :through => :question
    
    def correct?
       self.weight == 1
    end
end
