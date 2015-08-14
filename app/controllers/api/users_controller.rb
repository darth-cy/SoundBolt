class Api::UsersController < ApplicationController

  def index
    @users = User.includes(:tracks).includes(:followings_followed).all
    render 'index'
  end

  def show
    @user = User.includes(:tracks).includes(:streams).includes(:followings_followed).find(params[:id])
    render 'show'
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end
end
