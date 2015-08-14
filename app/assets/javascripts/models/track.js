Soundbolt.Models.Track = Backbone.Model.extend({
  urlRoot: '/api/tracks',

  comments: function(){
    if(!this._comments){
      this._comments = new Soundbolt.Collections.Comments();
    }
    return this._comments;
  },

  // username: function(){
  //   return this._username;
  // },

  // RAZYNOIR-INCOMPLETE: parse method doesn't go deep enough.
  parse: function(response){
    this.set(response);

    if(response.comments){
      this.comments().parse(response.comments);
      delete response.comments;
    }

    // if(response.username){
    //   this.username = response.username;
    //   delete response.username;
    // }

    return response;
  }
})
