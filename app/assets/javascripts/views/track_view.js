Soundbolt.Views.TrackView = Backbone.View.extend({
  template: JST['track'],
  className: 'track-tab panel-body',

  events: {
    "click #track-switch": "switchTrack"
  },

  initialize: function(options){
    this.model = options.track;
    this.listenTo(this.model, 'sync', this.render().$el);
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  },

  switchTrack: function(){
    console.log("switched track.") // TEST: Player Button fires event.
    Backbone.history.navigate("trackswitch/" + this.model.id, { trigger: true });
  }
})
