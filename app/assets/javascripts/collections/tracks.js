Soundbolt.Collections.Tracks = Backbone.Collection.extend({
  url: function(){
    return "/api/users/" + this.user.id + '/tracks'
  },

  initialize: function(options){
    this.user = options.user;
  },

  model: Soundbolt.Models.Track
})
