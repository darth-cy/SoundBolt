Soundbolt.Views.TrackNewView = Backbone.View.extend({

  template: JST['track_new'],

  events: {
    "submit form": "createTrack"
  },

  initialize: function(options){

  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createTrack: function(event){
    event.preventDefault();
    var thisView = this;

    $form = this.$el.find(".new-track-form");
    var data = $form.serializeJSON();

  }


})
