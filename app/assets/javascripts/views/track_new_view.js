Soundbolt.Views.TrackNewView = Backbone.View.extend({

  template: JST['track_new'],

  className: "user-view-normal-trackfield col-md-8",

  events: {
    "submit form": "createTrack"
  },

  initialize: function(options){
    this.model = options.user;
    this.genres = new Soundbolt.Collections.Genres();
    this.genres.fetch();

    this.listenTo(this.genres, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      genres: this.genres
    });

    this.$el.html(content);
    return this;
  },

  createTrack: function(event){
    event.preventDefault();

    var thisView = this;

    $form = this.$el.find(".new-track-form");
    var data = $form.serializeJSON();

    if(data["genre_ids"]){
      data.track["genre_ids"] = data["genre_ids"];
    }

    if(document.getElementById('use-profile-check').checked){
      data.track["image_url"] = thisView.model.escape('image_url');
    };
    var newTrack = new Soundbolt.Models.Track();

    newTrack.save(data.track, {
      success: function(){
        thisView.model.fetch();
        $(document.getElementById('display-own-tracks')).trigger('click');
      },

      error: function(model, response){
        var $domElement = $(document.getElementById('form-error-field'));
        Soundbolt.Utilities.showErrors($domElement, response);
      }
    })
  }
})
