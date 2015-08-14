Soundbolt.Collections.Followings = Backbone.Collection.extend({
  url: "/api/followings",
  model: Soundbolt.Models.Following,

  initialize: function(options){
    // this.model = options.user;
  }
})
