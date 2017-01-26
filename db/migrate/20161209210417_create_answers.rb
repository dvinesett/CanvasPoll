class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.string :text
  		
  		# weight of answer
  		t.decimal :weight
  		
  		# number of votes for each question, can be calculated from UsersAnswer or generated procedurally 
  		t.integer :votes
  		
  		# for each question, count up from 0
  		# t.integer :order
  		
  		t.references :question, foreign_key: true
  		
      t.timestamps
    end
  end
end
