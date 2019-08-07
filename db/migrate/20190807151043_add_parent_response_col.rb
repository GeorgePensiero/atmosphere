class AddParentResponseCol < ActiveRecord::Migration[5.2]
  def change
    add_column :responses, :parent_response_id, :integer
  end
end
