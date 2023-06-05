class User < ApplicationRecord
    has_many :punchcards, dependent: :destroy
    has_many :customers, through: :punchcards

    has_secure_password    

    validates :username, uniqueness: true
    validates :username, presence: true
    validates :password, length: { in: 8..15 }
    
end
 