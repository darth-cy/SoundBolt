Soundbolt.Models.Track = Backbone.Model.extend({
  urlRoot: '/api/tracks',

  comments: function(){
    if(!this._comments){
      this._comments = new Soundbolt.Collections.Comments();
    }
    return this._comments;
  },

  genres: function(){
    if(!this._genres){
      this._genres = new Soundbolt.Collections.Genres();
    }
    return this._genres;
  },

  // RAZYNOIR-INCOMPLETE: parse method doesn't go deep enough.
  parse: function(response){
    this.set(response);

    if(response.comments){
      this.comments().parse(response.comments);
      delete response.comments;
    }

    if(response.genres){
      this.genres().parse(response.genres);
      delete response.genres;
    }

    return response;
  }
})
