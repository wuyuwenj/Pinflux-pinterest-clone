class Api::BoardsController < ApplicationController

  def create
   @board = Board.new(board_params)
        
    if @board.save
            render :show
    else
      render json: { errors: @board.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    # @boards=Board.all

    @boards=Board.where(owner_id: params[:user_id])
    render :index
  end

  def show
    @board=Board.find_by(id: params[:id])
    render :show
  end
  
  def destroy
        @board = Board.find(params[:id])

        if @board && @board.destroy
            render json: ["Delete success"]
        else
            render json: @board.errors.full_messages
        end
    end

def update
        @board = Board.find(params[:id])
        
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages
        end
end
  private

  def board_params
    params.require(:board).permit(:name, :body, :private, :owner_id)
  end
end
