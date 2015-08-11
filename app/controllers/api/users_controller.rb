class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.includes(:tracks).find(params[:id])
    render 'show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar)
  end
end
