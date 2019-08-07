# == Schema Information
#
# Table name: responses
#
#  id        :bigint           not null, primary key
#  body      :text             not null
#  author_id :integer          not null
#  story_id  :integer          not null
#

class Response < ApplicationRecord
    validates :body, :author_id, :story_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        className: :User

    belongs_to :story,
        foreign_key: :story_id,
        className: :Story

    
end
