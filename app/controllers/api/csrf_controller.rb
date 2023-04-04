class Api::CsrfController < ApplicationController
  def token
    render json: { authenticity_token: form_authenticity_token }
  end
end