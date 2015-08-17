Soundbolt.Views.TracksFieldView = Backbone.FusedView.extend({
  template: JST['tracks_field'],
  tagName: 'section',
  className: 'user-view-normal-trackfield col-md-8',

  initialize: function(options){
    this.collection = options.tracks;
    this.own = options.own;

    this.addTracks();

    this.listenTo(this.collection, 'add remove reset sync', this.updateRender.bind(this));
  },

  updateRender: function(){
    this.addTracks();
    this.render();
  },

  // RAZYNOIR: Internally used. Not exposed.
  addTracks: function(){
    var thisField = this;
    thisField.emptyComponents();

    this.collection.each(function(track){
      var trackView = new Soundbolt.Views.TrackView({
        tracks: thisField.collection,
        track: track,
        own: thisField.own
      });
      thisField.addComponent(trackView);
    })
  },

  render: function(){
    RAZYNOIR:
    if(this.collection.length === 0){
      var content = JST['no_track']();
    }else{
      var content = this.template({ tracks: this.collection });
    }

    this.$el.html(content);
    this.fusion();

    return this;
  }
})
