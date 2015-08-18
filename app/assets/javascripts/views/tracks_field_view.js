Soundbolt.Views.TracksFieldView = Backbone.FusedView.extend({
  template: JST['tracks_field'],
  tagName: 'section',
  className: 'user-view-normal-trackfield col-md-8',

  events: {
    "keyup #search-name-field": "filterName"
  },

  initialize: function(options){
    this.model = options.user;
    this.collection = options.tracks;
    this.own = options.own;

    this.addTracks();

    this.listenTo(this.collection, 'add remove reset sync', this.updateRender.bind(this));
  },

  updateRender: function(){
    // this.model.fetch();
    this.addTracks();
    this.render();
  },

  addTracks: function(filteredTracks){
    var thisField = this;
    thisField.emptyComponents();

    if(filteredTracks){
      var tracks = filteredTracks;
    }else{
      var tracks = this.collection;
    }

    tracks.each(function(track){
      var trackView = new Soundbolt.Views.TrackView({
        tracks: thisField.collection,
        track: track,
        own: thisField.own
      });
      thisField.addComponent(trackView);
    })
  },

  filterName: function(){
    var nameCriteria = $("#search-name-field").val();

    if(nameCriteria.length === 0){
      var filteredCollection = this.collection;
      this.addTracks(filteredCollection);
      this.fusion();
      return 0;
    }

    nameCriteria = nameCriteria.toLowerCase();

    var filteredCollection = new Soundbolt.Collections.Tracks({ user: this.model });
    this.collection.each(function(track){
      if(track.escape('title').toLowerCase().indexOf(nameCriteria) !== -1 ||
         track.escape('username').toLowerCase().indexOf(nameCriteria) !== -1){
        filteredCollection.add(track);
      }
    });
    filteredCollection.shift();

    this.addTracks(filteredCollection);
    this.fusion();
  },

  render: function(){
    if(this.collection.length === 0){
      var content = JST['no_track']();
      this.$el.html(content);
    }else{
      var searchBar = JST['search_bar']();
      var content = this.template({ tracks: this.collection });
      this.$el.html(searchBar + content);
    }

    this.fusion();

    return this;
  }
})
