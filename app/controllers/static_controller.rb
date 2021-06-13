class StaticController < ApplicationController
  def about
    @ratings = Rating.all
    @rating = Rating.new
  end
end
