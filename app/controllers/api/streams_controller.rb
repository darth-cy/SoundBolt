class Api::StreamsController < ApplicationController

  def index
    @streams = nil
    render json: @streams
  end
end
