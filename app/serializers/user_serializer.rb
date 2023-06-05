class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
  
    # has_many :punchcards 
    has_many :customers
  
  end
  