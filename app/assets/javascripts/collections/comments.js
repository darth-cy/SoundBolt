Soundbolt.Collections.Comments = Backbone.Collection.extend({
  url: function(){
    return "/api/tracks/" + this.model.id + "/comments";
  },

  initialize: function(options){
    this.model = options.track;
  },
  
  model: Soundbolt.Models.Comment
})
