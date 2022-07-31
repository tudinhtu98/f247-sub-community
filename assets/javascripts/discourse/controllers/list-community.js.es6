import Controller, { inject as controller } from "@ember/controller";
import discourseComputed from "discourse-common/utils/decorators";

export default Controller.extend({
  @discourseComputed
  communities() {
    return [
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
    ];
  },

  actions: {},
});
