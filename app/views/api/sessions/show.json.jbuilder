
json.extract! @pin, :id, :title, :body, :author_id, :destination_link, :alt_text
json.imageUrl url_for(@pin.image) if @pin.image.attached?
