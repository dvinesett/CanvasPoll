class CreatePolls < ActiveRecord::Migration[5.0]
  def change
    create_table :polls do |t|
      t.string :name
  		t.integer :course_id
  		t.boolean :is_open
  		
      t.timestamps
    end
  end
end
