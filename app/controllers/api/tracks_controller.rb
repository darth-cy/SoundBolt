class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render json: @tracks
  end

  def show
    @track = Track.find(params[:id])
    render json: @track
  end

  def new

  end

  def create

  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :trackfile)
  end
end
