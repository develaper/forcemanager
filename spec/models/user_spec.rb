require 'rails_helper'

RSpec.describe User, type: :model do

  context 'validations' do
    user = FactoryBot.create(:user)
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:quote) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
   end
end
