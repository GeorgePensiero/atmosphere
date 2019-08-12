class DropFollowsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :follows_tables
  end
end
