class StaticPagesController < ApplicationController
  before_action :redirect_home_if_signed_in, only: [:index]

  def index
    render :index
  end
end
