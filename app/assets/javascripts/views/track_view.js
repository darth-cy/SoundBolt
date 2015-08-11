Soundbolt.Views.TrackView = Backbone.View.extend({
  template: JST['track'],
  className: 'single-track-tab',

  initialize: function(options){
    this.model = options.track;
  },

  render: function(){
    debugger;
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  }
})
