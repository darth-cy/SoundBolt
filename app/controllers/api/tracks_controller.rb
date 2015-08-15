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

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id
    
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def track_params
    # RAZYNOIR-INCOMPLETE: File upload not available.
    params.require(:track).permit(:title, :description, :trackfile_url, :image_url)
  end
end
