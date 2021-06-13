class AddNameToRatings < ActiveRecord::Migration[6.0]
  def change
    add_column :ratings, :name, :string
    add_column :ratings, :message, :text
    add_column :ratings, :location, :string
    add_column :ratings, :rated, :integer
  end
end
