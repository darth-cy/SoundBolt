window.Soundbolt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Graphics: {},
  Utilities: {},

  initialize: function() {
    window.spinnerOpts = {
        lines: 15 // The number of lines to draw
      , length: 25 // The length of each line
      , width: 22 // The line thickness
      , radius: 30 // The radius of the inner circle
      , scale: 0.25 // Scales overall size of the spinner
      , corners: 1 // Corner roundness (0..1)
      , color: '#F0F8FF' // #rgb or #rrggbb or array of colors
      , opacity: 0.15 // Opacity of the lines
      , speed: 1.5 // Rounds per second
      , trail: 50 // Afterglow percentage
      , zIndex: 150
    }

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
