import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "initializer-add-link-sub-community",
    initialize() {
        withPluginApi("1.3.0", api => {
            const user = api.getCurrentUser();
            api.addQuickAccessProfileItem({
                icon: "users",
                href: `/u/${user.username}/sub-comunity`,
                content: I18n.t("f247_sub_community.user.community_participated"),
                className: "sub-comunity",
            });
        });
    }
}
