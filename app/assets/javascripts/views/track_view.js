Soundbolt.Views.TrackView = Backbone.View.extend({
  template: JST['track'],

  initialize: function(options){
    this.model = options.track;
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  }
})
