class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    @users=User.all
    render :index
  end

  def show
    @user=User.find(params[:id])
    render :show
  end


  def update_setting
        @user = User.find(params[:user_id])
        
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages
        end
    end
  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :createdPins,:savedPins)
  end
end
