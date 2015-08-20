Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],
  className: 'user-view-normal-master row',

  events: {
    "click a#sidebar-title": "displayOwnTracks",
    "click a#display-own-tracks": "displayOwnTracks",
    "click a#display-my-streams": "displayMyStreams",
    "click a#create-a-track": "createTrack",
    "click a#explore-artists": "exploreUsers",
    "click a#track-edit": "editTrack",
  },

  initialize: function(options){
    this.model = options.user;

    this.users = new Soundbolt.Collections.Users();
    this.users.fetch();

    this.tracks = this.model.tracks();
    this.streams = this.model.streams();

    this.addSideBar();
    this.addStreamTrackField();

    this.listenTo(this.model, 'sync change remove', this._resetAssets.bind(this));
  },

  displayOwnTracks: function(event){
    // event.preventDefault();
    this.addOwnTrackField();
  },

  displayMyStreams: function(event){
    // event.preventDefault();
    this.addStreamTrackField();
  },

  createTrack: function(event){
    // event.preventDefault();
    var trackNewView = new Soundbolt.Views.TrackNewView({
      user: this.model,
      tracks: this.tracks
    });
    this._swapTrackField(trackNewView);
  },

  exploreUsers: function(event){
    // event.preventDefault();
    var exploreView = new Soundbolt.Views.UserExplore({
      users: this.users,
      user: this.model
     });
    this._swapTrackField(exploreView);
  },

  editTrack: function(event){
    // event.preventDefault();
    var track_id = $(event.currentTarget).data('track_id');
    var track = this.tracks.getOrFetch(track_id);
    // var track = new Soundbolt.Models.Track({ id: track_id });
    var editView = new Soundbolt.Views.TrackEditView({
      tracks: this.tracks,
      track: track,
      user: this.model,
    })
    // track.fetch();
    this._swapTrackField(editView);
  },

  // RAZYNOIR: Internally used function. Not exposed.
  addSideBar: function(){
    var sideBarView = new Soundbolt.Views.SideBarView({ user: this.model });
    this.addComponent(sideBarView);
  },

  addOwnTrackField: function(){
    var tracksFieldView = new Soundbolt.Views.TracksFieldView({
      users: this.users,
      user: this.model,
      tracks: this.tracks,
      own: true
    });
    this._swapTrackField(tracksFieldView);
  },

  addStreamTrackField: function(){
    var tracksFieldView = new Soundbolt.Views.TracksFieldView({
      users: this.users,
      user: this.model,
      tracks: this.streams,
      own: false
    });
    this._swapTrackField(tracksFieldView);
  },

  // RAZYNOIR: Purely utility functions.
  render: function(){
    var content = this.template()
    var newDiv = $('<div>').html(content).addClass("container"); // WARNING: UNCONVENTIONAL RENDERING.
    this.$el.html(newDiv);

    this.fusion();

    return this;
  },

  // RAZYNOIR: Update user tracks and streams.
  _resetAssets: function(){
    this.tracks = this.model.tracks();
    this.streams = this.model.streams();
  },

  // RAZYNOIR: Only swap the trackField, not rerendering the whole view.
  _swapTrackField: function(trackField){
    this._trackField && this._trackField.remove();
    this._trackField = trackField;
    this.addComponent(trackField);
  }
})
