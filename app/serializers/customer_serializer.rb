class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :punchcards
  has_many :users
end
