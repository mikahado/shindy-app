class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :count, :reward
  has_one :user
  has_one :customer
end
