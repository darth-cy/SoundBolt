Soundbolt.Models.Track = Backbone.Model.extend({
  urlRoot: '/api/tracks',

  comments: function(){
    if(!this._comments){
      this._comments = new Soundbolt.Collections.Comments();
    }
    return this._comments;
  },

  // RAZYNOIR-INCOMPLETE: parse method doesn't go deep enough.
  parse: function(response){
    if(response.comments){
      this.comments().set(response.comments);
      delete response.comments;
    }
    return response;
  }
})
