class SessionsController < ApplicationController

  def create
    @user = User.find_by_email(session_params[:email]);

    if @user && @user.is_password?(session_params[:password]);
      log_in!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = "The credential match failed. Try again."
      redirect_to root_url
    end
  end

  def destroy
    log_out!
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
