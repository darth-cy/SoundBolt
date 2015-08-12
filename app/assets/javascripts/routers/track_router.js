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
    var playerView = new Soundbolt.Views.PlayerMainView({ track: this.currentTrack() });
    this._swap(playerView);
  },

  switchTrack: function(id){
    var track = new Soundbolt.Models.Track({ id: id });
    track.fetch();

    this._swapTrack(track);

    var playerView = new Soundbolt.Views.PlayerMainView({ track: this.currentTrack() });

    this._swap(playerView);
    this._swapTrack(track);
  },

  focusOnTrack: function(){
    var track = this.currentTrack();

    window.focused = true;
    this.currentTrack().trigger('switchFocus');

    var userFocus = new Soundbolt.Views.UserFocus({ track: track });
    this._swapFocus(userFocus);
  },

  exitFocus: function(){

    window.focused = false;
    this.currentTrack().trigger('switchFocus');

    this._currentFocus.remove();
    this.$rootEl.html("");
  },

  currentTrack: function(){
    if(!this._currentTrack){
      this._currentTrack = new Soundbolt.Models.Track();
    }
    return this._currentTrack;
  },

  _swap: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$playerEl.html(view.render().$el);
  },

  _swapTrack: function(track){
    this._currentTrack = track;
  },

  _swapFocus: function(view){
    this._currentFocus && this._currentFocus.remove();
    this._currentFocus = view;
    this.$rootEl.html(view.render().$el);
  }
})
