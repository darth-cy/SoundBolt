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

  followings: function(){
    if(!this._followings){
      this._followings = new Soundbolt.Collections.Followings({ user: this });
    }
    return this._followings;
  },

  parse: function(response){
    this.set(response);

    if(response.followings_followed){
      this.followings().set(response.followings_followed);

      // RAZYNOIR-WARNING: Mild follower count variable not wrapped in Backbone.
      this.followers_count = response.followings_followed.length;
      //
      this.follower_ids = [];
      var follower_ids = this.follower_ids;
      response.followings_followed.forEach(function(f){
        follower_ids.push(f.following_id);
      })
      // debugger;

      delete followings_followed;
    }

    if(response.tracks){
      this.tracks().parse(response.tracks);
      delete response.tracks;
    }

    if(response.streams){
      this.streams().parse(response.streams);
      delete response.streams;
    }
    return response;
  }
})
