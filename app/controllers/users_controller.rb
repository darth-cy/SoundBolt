class UsersController < ApplicationController
  before_action :bounce_back_if_not_signed_in, only: [:show, :destroy]
  before_action :redirect_home_if_signed_in, only: [:index, :new, :create]

  def index
    # nothing to access here.
    # Dummy Comments
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if user_params[:confirm] != user_params[:password]
      flash.now[:errors] = ["Password confirm doesn't match."]
      render :new
    elsif @user.save
      log_in!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  # No edit and update actions available

  # def edit
  # end
  #
  # def update
  # end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :confirm, :image_url)
  end
end
