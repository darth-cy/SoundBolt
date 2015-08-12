window.Soundbolt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("Soundbolt namespace is initialize."); // TEST: initialize Soundbolt namespace
    new Soundbolt.Routers.Router({
      $rootEl: $("#soundbolt-content-master")
    });
    new Soundbolt.Routers.TrackRouter({
      $playerEl: $("#soundbolt-player-master")
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Soundbolt.initialize();
});
