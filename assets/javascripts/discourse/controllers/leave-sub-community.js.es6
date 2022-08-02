import Controller from "@ember/controller";
import discourseComputed, { on } from "discourse-common/utils/decorators";
import { ajax } from "discourse/lib/ajax";
import { helperContext } from "discourse-common/lib/helpers";

export default Controller.extend({
  actions: {
    agreeLeave() {
      console.log("agreeLeave");
    }
  },
});
