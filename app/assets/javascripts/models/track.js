Soundbolt.Models.Track = Backbone.Model.extend({
  urlRoot: function(){
    return '/api/users/' + this.user.id + '/tracks'
  },

  initialize: function(options){
    this.user = options.user;
  }
})
