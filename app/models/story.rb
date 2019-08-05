class Story < ApplicationRecord
    validates :title, :body, :author_id, presence: true
    # after_initialize :ensure_default_photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    private

#     def ensure_default_photo
#         file = open('https://atmosphere-aa-seeds.s3.amazonaws.com/doubleicecream.png')
#         self.photo.attach(io: file, filename: 'doubleicecream.jpg')
#     end
end
