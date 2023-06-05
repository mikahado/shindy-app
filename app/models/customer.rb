class Customer < ApplicationRecord
    has_many :punchcards
    has_many :users, through: :punchcards
   
    validates :name, presence: true
    validates :name, uniqueness: true
end
