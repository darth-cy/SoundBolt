Soundbolt.Views.TracksFieldView = Backbone.FusedView.extend({
  template: JST['tracks_field'],
  tagName: 'section',
  className: 'user-view-normal-trackfield',

  initialize: function(options){
    this.collection = options.tracks;

    this.addTracks();

    this.listenTo(this.collection, 'add remove reset sync', this.render.bind(this));
  },

  addTracks: function(){
    var thisField = this;

    this.collection.each(function(track){
      var trackView = new SoundBolt.Views.TrackView({ track: track });
      thisField.addComponent(trackView);
    })
  },

  render: function(){
    var content = this.template({ tracks: this.collection });
    this.$el.html(content);
    this.fusion();
  }
})
