Soundbolt.Collections.Streams = Backbone.Collection.extend({
  url: function(){
    return "/api/users/" + this.user.id + "/streams"
  },

  initialize: function(options){
    this.user = options.user
  },

  model: Soundbolt.Models.Track
})
