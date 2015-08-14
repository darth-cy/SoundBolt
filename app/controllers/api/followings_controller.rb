class Api::FollowingsController < ApplicationController

  def index
    @followings = Following.all
    render json: @followings
  end

  def show
    @following = Following.find(params[:id])
    render json: @following
  end

  def create
    @following = Following.new(following_params)
    if @following.save
      render json: @following
    else
      render json: @following.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @following = Following.find(params[:id])
    if @following.update(following_params)
      render json: @following
    else
      render json: @following.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @following = Following.find(params[:id])
    @following.destroy
    render json: @following
  end

  private
  def following_params
    params.require(:following).permit(:user_followed_id, :user_following_id)
  end
end
