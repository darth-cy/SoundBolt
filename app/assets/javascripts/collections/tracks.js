Soundbolt.Collections.Tracks = Backbone.Collection.extend({
  url: function(){
    return "/api/users/" + this.user.id + '/tracks'
  },

  initialize: function(options){
    this.user = options.user;
  },

  model: Soundbolt.Models.Track,

  parse: function(response){
    this.set(response);
  },

  getOrFetch: function(id){
    var thisCollection = this;
    var track = this.get(id);
    if(track){
      track.fetch();
    }else{
      track = new Soundbolt.Models.Track({ id: id });
      track.fetch({
        success: function(){
          thisCollection.add(track);
        }
      });
    }
    return track;
  }

})
