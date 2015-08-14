class Api::TracksController < ApplicationController

  def index
    @user = User.find(params[:id])
    @tracks = @user.tracks
    render json: @tracks
  end

  def show
    @track = Track.includes(:user).includes(comments: :user).find(params[:id])
    render 'show'
  end

  def new

  end

  def create

  end

  private

  def track_params
    # RAZYNOIR-INCOMPLETE: File upload not available.
    params.require(:track).permit(:title, :description)
  end
end
