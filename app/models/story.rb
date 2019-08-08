# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'open-uri'

class Story < ApplicationRecord
    validates :title, :body, :author_id, presence: true
    after_initialize :ensure_default_photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :responses,
        foreign_key: :story_id
    
    has_one_attached :photo

    private

    def ensure_default_photo
        
        unless self.photo.attached?
            file = open('https://atmosphere-aa-seeds.s3.amazonaws.com/psyduck.jpeg')
            self.photo.attach(io: file, filename: 'psyduck.jpg')
        end
    end
end
