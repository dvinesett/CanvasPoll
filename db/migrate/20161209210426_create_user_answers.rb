class CreateUserAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :user_answers do |t|
      t.integer :user_id
      t.references :answer, foreign_key: true
      
      t.timestamps
    end
  end
end
