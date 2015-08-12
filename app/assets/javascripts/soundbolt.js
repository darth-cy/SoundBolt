window.Soundbolt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new Soundbolt.Routers.Router({
      $rootEl: $("#soundbolt-content-master"),
    });

    new Soundbolt.Routers.TrackRouter({
      $rootEl: $("#soundbolt-focus-master"),
      $playerEl: $("#soundbolt-player-master")
    })

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Soundbolt.initialize();
});
