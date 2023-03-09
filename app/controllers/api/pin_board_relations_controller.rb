class Api::PinBoardRelationsController < ApplicationController
    wrap_parameters include:  ['boardId','pinId']



    def create
        new_pin_on_board = PinBoardRelation.new(board_pin_params)
        @board = Board.find(params[:pin_board_relation][:board_id])

        if @board && new_pin_on_board.save
            render "api/boards/show"
        else
            render json: new_pin_on_board.errors, status: 422
        end
    end

 

    private

    def board_pin_params
        params.require(:pin_board_relation).permit(:board_id, :pin_id)
    end
    
end