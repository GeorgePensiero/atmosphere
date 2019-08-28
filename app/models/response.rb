# == Schema Information
#
# Table name: responses
#
#  id                 :bigint           not null, primary key
#  body               :text             not null
#  author_id          :integer          not null
#  story_id           :integer          not null
#  parent_response_id :integer
#

class Response < ApplicationRecord
    validates :body, :author_id, :story_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :story,
        foreign_key: :story_id,
        class_name: :Story

    belongs_to :parent_response, 
        foreign_key: :parent_response_id,
        class_name: :Response,
        optional: true
    
end
