class Api::GenresController < ApplicationController

  def index
    @genres = Genre.all
    render json: @genres
  end

end
