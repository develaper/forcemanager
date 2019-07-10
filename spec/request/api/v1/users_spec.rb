require "rails_helper"

describe Api::V1::UsersController , :type => :controller do
  context "GET" do
    it 'sends a list of users' do
      FactoryBot.create_list(:user, 10)
      get :index, format: :json
      json = JSON.parse(response.body)

      expect(response).to be_successful
      expect(json.length).to eq(10)
    end
    it 'displays a single user' do
      users = FactoryBot.create_list(:user, 2)
      get :show, :params => { :id => users.first.id , format: :json }
      json = JSON.parse(response.body)

      expect(response).to be_successful
      expect(response.body).to include(users.first.name)
      expect(response.body).not_to include(users.last.name)
    end
  end

  context "POST" do
    it 'creates a user with valid parameters' do
      user = FactoryBot.build(:user)
      post :create, :params => { :user => { :name => user.name, :quote => user.quote, :email => user.email } , :format => :json }
      json = JSON.parse(response.body)

      expect(response).to be_successful
      expect(response.body).to include(user.name)
      expect(response.body).to include(user.quote)
      expect(response.body).to include(user.email)
    end
    it 'does not create a user with invalid parameters' do
      user = FactoryBot.build(:user)
      expect{
        post :create, :params => { :user => { :name => user.name, :quote => user.quote } , :format => :json }
      }.to_not change(User, :count)
    end
  end

  context "PUT" do
    it 'updates an user' do
      user = FactoryBot.create(:user, name: "Any Name")
      put :update, :params => { :id => user.id, :user => { :name => "new name", :quote => "updated quote" } , :format => :json }

      expect(response).to be_successful
      expect(response.body).to include("new name")
      expect(response.body).not_to include("Any Name")
      expect(User.all).to include(user)
    end
  end

  context "DELETE" do
    it 'deletes an user' do
      user = FactoryBot.create(:user)
      delete :destroy, :params => { :id => user.id , :format => :json }

      expect(response).to be_successful
      expect(User.all).not_to include(user)
    end
  end
end
