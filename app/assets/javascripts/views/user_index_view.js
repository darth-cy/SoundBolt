Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],
  className: 'user-view-normal-master row',

  events: {
    "click a#display-own-tracks": "displayOwnTracks",
    "click a#display-my-streams": "displayMyStreams",
    "click a#create-a-track": "createTrack",
    "click a#explore-artists": "exploreUsers"
  },

  initialize: function(options){
    this.model = options.user;

    this.tracks = this.model.tracks();
    this.streams = this.model.streams();

    this.addSideBar();
    this.displayOwnTracks();

    this.listenTo(this.model, 'sync change remove', this._resetAssets.bind(this));
  },

  displayOwnTracks: function(){
    this.addOwnTrackField();
  },

  displayMyStreams: function(){
    this.addStreamTrackField();
  },

  createTrack: function(){
    var trackNewView = new Soundbolt.Views.TrackNewView({ user: this.model });
    this._swapTrackField(trackNewView);
  },

  exploreUsers: function(){
    var allUsers = new Soundbolt.Collections.Users();
    allUsers.fetch();

    var exploreView = new Soundbolt.Views.UserExplore({ users: allUsers, user: this.model });
    this._swapTrackField(exploreView);
  },


  // RAZYNOIR: Internally used function. Not exposed.
  addSideBar: function(){
    var sideBarView = new Soundbolt.Views.SideBarView({ user: this.model });
    this.addComponent(sideBarView);
  },

  addOwnTrackField: function(){
    var tracksFieldView = new Soundbolt.Views.TracksFieldView({ tracks: this.tracks });
    this._swapTrackField(tracksFieldView);
  },

  addStreamTrackField: function(){
    var tracksFieldView = new Soundbolt.Views.TracksFieldView({ tracks: this.streams });
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
