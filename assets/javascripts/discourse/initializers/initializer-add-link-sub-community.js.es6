import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "initializer-add-link-sub-community",
    initialize() {
        withPluginApi("1.3.0", api => {
            const curentUser = api.getCurrentUser();
            api.addQuickAccessProfileItem({
                icon: "users",
                href: `/u/${curentUser.username}/cong-dong-con`,
                content: I18n.t("f247_sub_community.user.community_participated"),
                className: "sub-community",
            });
        });
    }
}
