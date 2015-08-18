Soundbolt.Models.Genre = Backbone.Model.extend({
  urlRoot: "/api/genres",

  initialize: function(){

  },

  parse: function(response){
    this.set(response);
  }
})
