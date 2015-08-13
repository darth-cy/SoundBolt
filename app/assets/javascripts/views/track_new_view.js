Soundbolt.Views.TrackNewView = Backbone.View.extend({

  template: JST['track_new'],

  events: {
    "submit form": "createTrack"
  },

  initialize: function(options){

  },


})
