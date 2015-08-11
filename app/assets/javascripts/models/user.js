Soundbolt.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  initialize: function(options){
    this._tracks = options.collection;
  },

  tracks: function(){
    if(!this._tracks){
      this._tracks = new Soundbolt.Collections.Tracks();
    }
    return this._tracks;
  },

  parse: function(response){
    if(response.tracks){
      this.tracks().set(response.tracks);
      delete response.tracks;
    }
    return response;
  }
})
