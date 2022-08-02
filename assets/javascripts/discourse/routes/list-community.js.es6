import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  model() {
    return {
      communities: [
        {
          name: "On The Road",
          n_members: "3 thành viên mới",
          n_topics: "3 chủ đề mới",
          img:
            "https://photo2.tinhte.vn/data/attachment-files/2021/08/5577318_og.jpg",
        },
        {
          name: "Phím cơ",
          n_members: "3 thành viên mới",
          n_topics: "3 chủ đề mới",
          img:
            "https://photo2.tinhte.vn/data/attachment-files/2021/08/5577318_og.jpg",
        },
        {
          name: "Hiệp Sĩ",
          n_members: "3 thành viên mới",
          n_topics: "3 chủ đề mới",
          img:
            "https://photo2.tinhte.vn/data/attachment-files/2021/08/5577318_og.jpg",
        },
        {
          name: "Android",
          n_members: "3 thành viên mới",
          n_topics: "3 chủ đề mới",
          img:
            "https://photo2.tinhte.vn/data/attachment-files/2021/08/5577318_og.jpg",
        },
        {
          name: "Sống khỏe mùa dịch",
          n_members: "3 thành viên mới",
          n_topics: "3 chủ đề mới",
          img:
            "https://photo2.tinhte.vn/data/attachment-files/2021/08/5577318_og.jpg",
        },
        {
          name: "Gaming Laptop",
          n_members: "3 thành viên mới",
          n_topics: "3 chủ đề mới",
          img:
            "https://photo2.tinhte.vn/data/attachment-files/2021/08/5577318_og.jpg",
        },
      ],
    };
  },
  setupController(controller, model) {
    this.controllerFor("list-community").set("model", model);
  },
  renderTemplate() {
    // Renders the template `../templates/list-community.hbs`
    this.render("list-community");
  },
});
