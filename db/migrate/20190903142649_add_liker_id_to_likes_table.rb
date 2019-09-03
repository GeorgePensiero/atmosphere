class AddLikerIdToLikesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :liker_id, :integer, null: false
  end
end
