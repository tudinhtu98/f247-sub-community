/**
 * Links the path `/f247-sub-community` to a route named `f247-sub-community`. Named like this, a
 * route with the same name needs to be created in the `routes` directory.
 */

export default {
  resource: "user",
  map() {
    this.route(
      "user-sub-community",
      { path: "/cong-dong-con", resetNamespace: true },
    );
  }
}