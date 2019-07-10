class Api::V1::UsersController < Api::V1::BaseController
  def index
    respond_with User.all
  end

  def create
    respond_with :api, :v1, User.create(user_params)
  end

  def show
    respond_with user, json: user
  end

  def update
    user.update_attributes(user_params)
    respond_with user, json: user
  end

  def destroy
    respond_with User.destroy(params[:id])
  end

  private

  def user
    User.find(params["id"])
  end

  def user_params
    params.require(:user).permit(:id, :name, :quote, :email)
  end
end
