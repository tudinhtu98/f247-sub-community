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
        %w{users u}.each_with_index do |root_path, index|
            get "#{root_path}/:username/cong-dong-con" => "f247_sub_community#index", constraints: { username: RouteFormat.username }
        end
        
        get '/cong-dong-con' => 'f247_sub_community#communities'
    end
end