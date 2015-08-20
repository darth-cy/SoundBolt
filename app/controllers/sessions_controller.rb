class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password]);

    if @user
      log_in!(@user)
      redirect_to user_url(@user)
    else
      flash[:errors] = ["The credential match failed. Try again."]
      redirect_to root_url
    end
  end

  def destroy
    log_out!
    redirect_to root_url
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
