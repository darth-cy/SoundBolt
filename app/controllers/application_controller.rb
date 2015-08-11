class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    !!User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    session[:session_token] = nil;
    user.reset_session_token!
  end

  def bounce_back_if_not_signed_in
    unless current_user
      flash[:errors] = "You must sign in to view features!"
      redirect_to root_url
    end
  end

  def redirect_home_if_signed_in
    if current_user
      redirect_to user_url(current_user)
    end
  end

end
