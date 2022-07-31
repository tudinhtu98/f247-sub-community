# name: plugin-f247-sub-community
# about: Description for this plugin
# version: 0.1.0
# authors: Tu Dinh Tu
# url:

enabled_site_setting :f247_sub_community_enabled

register_asset 'stylesheets/f247-sub-community.scss'

after_initialize do
    load File.expand_path('../app/controllers/f247_sub_community_controller.rb', __FILE__)

    Discourse::Application.routes.append do
        # # Map the path `/f247-sub-community` to `F247SubCommunityController`’s `index` method
        # # Remove route if not in use
        get '/f247-sub-community' => 'f247_sub_community#index'
        get '/cong-dong-con' => 'f247_sub_community#communities'
    end
end