Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],
  className: 'user-view-normal-master row',

  events: {
    "click a#display-own-tracks": "displayOwnTracks",
    "click a#display-my-streams": "displayMyStreams",
    "click a#create-a-track": "createTrack"
  },

  initialize: function(options){
    this.model = options.user;

    this.tracks = this.model.tracks();
    this.streams = this.model.streams();

    this.addSideBar();
    this.displayOwnTracks();

    this.listenTo(this.model, 'sync', this._resetAssets.bind(this));
  },

  displayOwnTracks: function(){
    console.log("Displayed own tracks."); // TEST
    this.addOwnTrackField();
  },

  displayMyStreams: function(){
    console.log("Displayed streams."); // TEST
    this.addStreamTrackField();
  },

  createTrack: function(){
    console.log("New Song!"); // TEST
  },

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

  render: function(){
    var content = this.template()
    var newDiv = $('<div>').html(content).addClass("container"); // WARNING: UNCONVENTIONAL RENDERING.
    this.$el.html(newDiv);

    this.fusion();

    return this;
  },

  _resetAssets: function(){
    this.tracks = this.model.tracks();
    this.streams = this.model.streams();
  },

  _swapTrackField: function(trackField){
    this._trackField && this._trackField.remove();
    this._trackField = trackField;
    this.addComponent(trackField);
  }
})
