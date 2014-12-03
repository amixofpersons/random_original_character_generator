class User < ActiveRecord::Base
  # Remember to create a migration!
  has_secure_password
  validates :name, presence: true, uniqueness: true
  has_many :original_characters
end
