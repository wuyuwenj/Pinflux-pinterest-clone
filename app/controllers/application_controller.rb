class ApplicationController < ActionController::API

    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    before_action :snake_case_params, :attach_authentucity_token

    private

    def snake_case_params
    params.deep_transform_keys!(&:underscore)
    end

    def attach_authentucity_token
        headers["X-CSRF-Token"]=masked_authenticity_token(session)
    end
end
