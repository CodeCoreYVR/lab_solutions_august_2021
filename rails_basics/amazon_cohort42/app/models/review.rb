class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user
  validates :rating, presence: :true, numericality: {greater_than: 0, less_than: 6}
  #{greater_than: 0,lesser_than:6}
end
