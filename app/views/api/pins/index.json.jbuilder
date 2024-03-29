
  @pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title
      json.imageUrl url_for(pin.image) if pin.image.attached?
    end
  end
