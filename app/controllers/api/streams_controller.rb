class Api::StreamsController < ApplicationController

  def index
    @user = User.find(params[:user_id]);
    @streams = @user.streams
    render json: @streams
  end

  private

  def stream_params
    params.require(:streams).permit(:title)
  end
end
