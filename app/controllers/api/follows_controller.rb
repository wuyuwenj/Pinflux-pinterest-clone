class Api::FollowsController < ApplicationController
    # wrap_parameters include:  ['followeeId','followerId']

    def index
        @follows = Follow.all
        render :index
    end


    def create
        new_follow = Follow.new(follow_params)
        @user = User.find(params[:follow_params][:followee_id])

        if new_follow.save
            render "api/users/show"
        else
            render json: new_follow.errors, status: 422
        end
    end

    # def destroy
    #     @followee ||= User.find_by(id: params[:followee_id])
    #     @follower ||= User.find_by(id: params[:follower_id])

    #     if !@followee || !@follower
    #         render json: ["Something went wrong"], status: 422
    #     end
    #     if @followee.remove_following(@follower)
    #         render "api/users/show"
    #     else
    #         render json: ["Something went wrong"], status: 422
    #     end

    # end
     def destroy
        @follow = Follow.find_by(followee_id: params[:followee_id], follower_id: params[:follower_id])

        if @follow.destroy
            render "api/users/show"
        else
            render json: ["Something went wrong"], status: 422
        end

    end

    private

    def follow_params
        params.require(:follow).permit(:followee_id, :follower_id)
    end
    
    
end
