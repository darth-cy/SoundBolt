Soundbolt.Models.Comment = Backbone.Model.extend({
  urlRoot: "/api/comments",

  parse: function(response){
    this.set(response);
    return response;
  }
})
