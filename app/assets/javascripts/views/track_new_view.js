Soundbolt.Views.TrackNewView = Backbone.View.extend({

  template: JST['track_new'],

  className: "user-view-normal-trackfield col-md-8",

  // RAZYNOIR-INCOMPLETE: Form event not listening.
  events: {
    "submit form": "createTrack"
  },

  initialize: function(options){
    this.model = options.user;
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

    var newTrack = new Soundbolt.Models.Track();

    newTrack.save(data.track, {
      success: function(){
        thisView.model.fetch();
        $(document.getElementById('display-own-tracks')).trigger('click');
      }
    })

    // RAZYNOIR-INCOMPLETE: File upload system broken as hell.
    // RAZYNOIR-MAJOR: Track creation not available.
  }
})
