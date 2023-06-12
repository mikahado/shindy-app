class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :count, :reward, :username

  has_one :user
  has_one :customer

  def username
    object.user.username
  end

end
