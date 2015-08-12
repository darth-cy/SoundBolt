Soundbolt.Routers.TrackRouter = Backbone.Router.extend({
  routes: {
    "trackswitch/:id": "switchTrack",
    "trackfocus": "focusOnTrack",
    "exitfocus": "exitFocus"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$playerEl = options.$playerEl;
    this.renderInitial();
  },

  renderInitial: function(){
    var playerView = new Soundbolt.Views.PlayerMainView({});
    this._swap(playerView);
  },

  switchTrack: function(id){
    var track = new Soundbolt.Models.Track({ id: id });

    track.fetch();
    var playerView = new Soundbolt.Views.PlayerMainView({ track: track });

    this._swap(playerView);
    this._swapTrack(track);
  },

  focusOnTrack: function(){
    var track = this._currentTrack;
    window.focusedView = true;

    var userFocus = new Soundbolt.Views.UserFocus({ track: track });
    this._swapFocus(userFocus);
  },

  exitFocus: function(){
    window.focusedView = false;
    this._currentFocus.remove();
    this.$rootEl.html("");
  },

  _swap: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$playerEl.html(view.render().$el);
  },

  _swapTrack: function(track){
    this._currentTrack && this._currentTrack.remove();
    this._currentTrack = track;
  },

  _swapFocus: function(view){
    this._currentFocus && this._currentFocus.remove();
    this._currentFocus = view;
    this.$rootEl.html(view.render().$el);
  }
})
