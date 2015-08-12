Soundbolt.Views.TrackView = Backbone.View.extend({
  template: JST['track'],
  className: 'single-track-tab',

  initialize: function(options){
    this.model = options.track;
    this.listenTo(this.model, 'sync', this.render().$el);
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  },

  renderWaveForm: function(){

  }
})
