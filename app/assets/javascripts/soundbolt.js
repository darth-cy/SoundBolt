window.Soundbolt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new Soundbolt.Routers.TrackRouter({
      $playerEl: $("#soundbolt-player-master")
    })

    new Soundbolt.Routers.Router({
      $rootEl: $("#soundbolt-content-master"),
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Soundbolt.initialize();
});
