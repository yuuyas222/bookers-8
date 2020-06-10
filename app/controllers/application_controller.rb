class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    
    
    before_action :configure_permitted_parameters, if: :devise_controller?
    
    

    # def after_sign_in_path_for(resource)
    #     user_path(current_user.id)# ログイン後に遷移するpathを設定
    # end
    

    protected

    def after_sign_in_path_for(resource)
        user_path(resource)# ログイン後に遷移するpathを設定
    end

    def configure_permitted_parameters
        added_attrs = [ :email, :name, :password, :password_confirmation,:profile_image,:postcode, :prefecture_code, :address_city, :address_street, :address_building ]
        devise_parameter_sanitizer.permit(:sign_up, keys: added_attrs) 
        devise_parameter_sanitizer.permit :account_update, keys: added_attrs
        devise_parameter_sanitizer.permit :sign_in, keys: [:name]
    end

end
