Soundbolt.Views.UserIndex = Backbone.FusedView.extend({
  template: JST['user_index'],
  className: 'user-view-normal-master container-fluid',

  events: {
    "click a#display-own-tracks": "displayOwnTracks",
    "click a#display-my-streams": "displayMyStreams",
    "click a#create-a-song": "createSong"
  },

  initialize: function(options){
    this.model = options.user;

    this.tracks = this.model.tracks();
    this.streams = this.model.streams();

    this.addSideBar();
    this.addOwnTrackField();

    this.listenTo(this.model, 'sync', this._resetAssets.bind(this));
  },

  displayOwnTracks: function(){
    console.log("Displayed own tracks.");
    this.addOwnTrackField();
  },

  displayMyStreams: function(){
    console.log("Displayed streams.");
    this.addStreamTrackField();
  },

  createSong: function(){
    console.log("New Song!");
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
    this.$el.html(content);

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
