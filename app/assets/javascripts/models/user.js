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

  followeds: function(){
    if(!this._followeds){
      this._followeds = new Soundbolt.Collections.Followings({ user: this });
    }
    return this._followeds;
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
      // debugger;this is something

      delete followings_followed;
    }

    if(response.followings_following){
      this.followeds().set(response.followings_following);
      this.followeds_count = response.followings_following.length;

      this.followed_id = [];
      var followed_ids = this.follower_ids;
      response.followings_following.forEach(function(f){
        followed_ids.push(f.following_id);
      })

      delete followings_following;
    }

    if(response.tracks){
      this.tracks().parse(response.tracks);
      this.track_count = response.tracks.length;
      delete response.tracks;
    }

    if(response.streams){
      this.streams().parse(response.streams);
      delete response.streams;
    }
    return response;
  }
})
