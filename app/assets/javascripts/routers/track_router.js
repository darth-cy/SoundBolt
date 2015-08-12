Soundbolt.Routers.TrackRouter = Backbone.Router.extend({
  routes: {
    "trackswitch/:id": "switchTrack"
  },

  initialize: function(options){
    this.$playerEl = options.$playerEl;

    this.renderInitial();
    console.log("player initialized.");
    console.log(this.$playerEl);
  },

  renderInitial: function(){
    var playerView = new Soundbolt.Views.PlayerMainView({});
    this._swap(playerView);
  },

  switchTrack: function(id){
    console.log("Handing switch track to " + id); // TEST: track router handles switch.
    var track = new Soundbolt.Models.Track({ id: id });
    track.fetch();
    var playerView = new Soundbolt.Views.PlayerMainView({ track: track });
    this._swap(playerView);
  },

  _swap: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$playerEl.html(view.render().$el);
  }
})
