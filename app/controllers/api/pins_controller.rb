class Api::PinsController < ApplicationController

    def index
        @pins = Pin.all
        render :index
    end

    def show
        @pin = Pin.find(params[:id])

        render :show
    end

    def create
        
        @pin = Pin.new(pin_params)
        

        if @pin.save
            render :show
        else
            render json: ["somethings wrong!!!!!"]
        end

    end

    def update
        @pin = Pin.find(params[:id])
        
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages
        end
    end

    def destroy

        @pin = Pin.find(params[:id])

        if @pin && @pin.destroy
            render json: ["Delete success"]
        else
            render json: @pin.errors.full_messages
        end
    end

     def saved_pins
        @pins = User.retrieve_saved_pins(params[:user_id])
        render "api/pins/index" 
    end

    def created_pins
        @pins = User.retrieve_created_pins(params[:user_id])
        render "api/pins/index" 
    end

    private
    def pin_params
        params.require(:pin).permit(:body, :title, :author_id, :destination_link, :alt_text, :picurl,:image)
    end
end
