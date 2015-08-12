Soundbolt.Views.TracksFieldView = Backbone.FusedView.extend({
  template: JST['tracks_field'],
  tagName: 'section',
  className: 'user-view-normal-trackfield col-md-6',

  initialize: function(options){
    this.collection = options.tracks;

    this.addTracks();

    this.listenTo(this.collection, 'add remove reset sync', this.updateRender.bind(this));
  },

  updateRender: function(){
    this.addTracks();
    this.render();
  },

  addTracks: function(){
    var thisField = this;
    thisField.emptyComponents();

    this.collection.each(function(track){
      var trackView = new Soundbolt.Views.TrackView({ track: track });
      thisField.addComponent(trackView);
    })
  },

  render: function(){
    var content = this.template({ tracks: this.collection });
    this.$el.html(content);
    this.fusion();

    return this;
  }
})
