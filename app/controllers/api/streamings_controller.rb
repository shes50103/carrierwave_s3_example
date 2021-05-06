module Api
  class StreamingsController < ActionController::API
    def update
      puts "update"

      render json: { status: :success }
    end
  end
end
