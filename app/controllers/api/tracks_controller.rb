class Api::TracksController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @tracks = @user.tracks
    render json: @tracks
  end

  def show
    @track = Track.includes(:user).includes(comments: :user).includes(:genres).find(params[:id])
    render 'show'
  end

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id

    if @track.save
      if @track.update(genre_ids: params[:genre_ids])
        @track = Track.includes(:user).includes(:genres).find(@track.id)
        render 'create'
      else
        @track.destroy
        render json: @track.errors.full_messages, status: :unprocessable_entity
      end
    else
      flash.now[:errors] = @track.errors.full_messages
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @track = Track.find(params[:id])
    @track.user_id = current_user.id

    if @track.update(track_params.merge({genre_ids: params[:genre_ids]}))
      @track = Track.includes(:user).includes(comments: :user).includes(:genres).find(params[:id])
      render 'create'
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @track = Track.find(params[:id]);
    @track.destroy
    render json: @track
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :trackfile_url, :image_url, genre_ids: [])
  end
end
