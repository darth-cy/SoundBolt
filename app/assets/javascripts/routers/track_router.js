Soundbolt.Routers.TrackRouter = Backbone.Router.extend({
  routes: {
    "trackswitch/:id": "switchTrack"
  },

  initialize: function(options){
    this.$playerEl = options.$playerEl;
    console.log("player initialized.");
    console.log(this.$playerEl);
  },

  switchTrack: function(id){

  }
})
