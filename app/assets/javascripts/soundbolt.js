window.Soundbolt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("Initialize!");
    new SoundBolt.Routers.Router(
      $rootEl = $("#soundbolt-content-master")
    );

  }
};

$(document).ready(function(){
  Soundbolt.initialize();
});
