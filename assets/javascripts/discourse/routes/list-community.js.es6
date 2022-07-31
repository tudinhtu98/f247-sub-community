import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  model() {
    return null;
  },
  setupController(controller, model) {
    this.controllerFor("list-community").set("model", model);
  },
  renderTemplate() {
    // Renders the template `../templates/list-community.hbs`
    this.render("list-community");
  },
});
