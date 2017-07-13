module User
	class Auth < Grape::API
		version 'v1', using: :path
	  format :json
	  rescue_from :all

	  resource :user do
	  	params do
	  		requires :email, type: String
	  		requires :password, type: String
	  	end
	  	get :login do
	  		if params[:email] == 'test@gmail.com' && params[:password] == '111111'
	  			present 'success'
	  		else
	  			error! 'Access Denied', 401
	  		end
			end

			params do
	  		requires :displayName, type: String
	  		requires :email, type: String
	  		requires :password, type: String
	  		requires :gender, type: String
	  		requires :birthDate, type: Date
	  	end
	  	post :signup do
			end
	  end
	end
end