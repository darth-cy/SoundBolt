Soundbolt.Collections.Comments = Backbone.Collection.extend({
  url: "api/comments",

  initialize: function(options){

  },

  model: Soundbolt.Models.Comment,

  parse: function(response){
    this.set(response);
  },

  comparator: function(comment){
    return comment.get('timeline_position');
  }
})
