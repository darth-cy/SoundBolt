Soundbolt.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  initialize: function(options){
  },

  tracks: function(){
    if(!this._tracks){
      this._tracks = new Soundbolt.Collections.Tracks({ user: this });
    }
    return this._tracks;
  },

  streams: function(){
    if(!this._streams){
      this._streams = new Soundbolt.Collections.Streams({ user: this });
    }
    return this._streams;
  },

  parse: function(response){
    if(response.tracks){
      this.tracks().set(response.tracks);
      delete response.tracks;
    }
    if(response.streams){
      this.streams().set(response.streams);
      delete response.streams;
    }
    return response;
  }
})
