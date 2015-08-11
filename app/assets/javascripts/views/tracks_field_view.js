SoundBolt.Views.TracksFieldView = Backbone.FusedView.extend({
  template: JST['tracks_field'],

  initialize: function(){
    this.collection = options.tracks;
    this.addTracks();
    this.listenTo(this.collection, 'add remove reset sync', this.render.bind(this));
  },

  addTracks: function(){
    var thisView = this;

    this.collection.each(function(track){
      var trackView = new SoundBolt.Views.TrackView({ track: track });
      thisView.addComponent('user-view-normal-trackfield', trackView);
    })
  }

  render: function(){
    var content = this.template({ tracks: this.collection });
    this.$el.html(content);
    this.fusion();
  }
})
