import Controller from "@ember/controller";
import discourseComputed from "discourse-common/utils/decorators";
import discourseDebounce from "discourse-common/lib/debounce";
import { get } from "@ember/object";
import { INPUT_DELAY } from "discourse-common/config/environment";

export default Controller.extend({
  filter: null,

  @discourseComputed("model.communities", "filter")
  filterCommunities(communities, filter) {
    if (filter) {
      filter = filter.toLowerCase();
      communities = communities.filter((community) => {
        return (
          (get(community, "name") || "").toLowerCase().indexOf(filter) > -1
        );
      });
    }
    return communities;
  },

  actions: {
    filterCommunities(filter) {
      discourseDebounce(this, this._debouncedFilter, filter, INPUT_DELAY);
    },
  },

  _debouncedFilter(filter) {
    this.set("filter", filter);
  },
});
