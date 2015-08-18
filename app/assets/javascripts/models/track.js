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

  genre_ids: function(){
    if(!this._genre_ids){
      this._genre_ids = [];
    }
    return this._genre_ids;
  },

  // RAZYNOIR-INCOMPLETE: parse method doesn't go deep enough.
  parse: function(response){
    var thisModel = this;

    this.set(response);

    if(response.comments){
      this.comments().parse(response.comments);
      delete response.comments;
    }

    debugger;
    if(response.genres){
      response.genres.forEach(function(genre){
        thisModel.genre_ids().push(genre.id);
      });
      this.genres().parse(response.genres);
      delete response.genres;
    }

    return response;
  }
})
