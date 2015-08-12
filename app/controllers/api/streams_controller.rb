class Api::StreamsController < ApplicationController

  def index
    @user = User.find(params[:id]);
    @streams = @user.streams
    render json: @streams
  end
end
