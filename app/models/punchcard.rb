class Punchcard < ApplicationRecord
  belongs_to :user
  belongs_to :customer

  validates_uniqueness_of :customer_id, :scope => :user_id

  validates :reward, presence: true
  validates :count, presence: true, numericality: true, length: {maximum: 30}
  
end
