Soundbolt.Views.TrackEditView = Backbone.View.extend({
  template: JST['track_edit'],

  className: "user-view-normal-trackfield col-md-8",

  events: {
    "submit form": "editTrack"
  },

  initialize: function(options){
    this.collection = options.tracks;
    this.model = options.user;
    this.track = options.track;

    this.genres = new Soundbolt.Collections.Genres();
    this.genres.fetch();

    this.listenTo(this.genres, 'sync', this.render.bind(this));
    this.listenTo(this.track, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      user: this.model,
      track: this.track,
      genres: this.genres
    });

    this.$el.html(content);
    return this;
  },

  editTrack: function(event){
    event.preventDefault();

    var thisView = this;

    $form = this.$el.find(".edit-track-form");
    var data = $form.serializeJSON();

    if(document.getElementById('user-profile-check').checked){
      data.track['image_url'] = thisView.model.escape('image_url');
    };

    thisView.track.save(data.track, {
      wait: true,
      success: function(model){
        thisView.collection.add(model);
        $(document.getElementById('display-own-tracks')).trigger('click');
      },

      error: function(model, response){
        var $domElement = $(document.getElementById('form-error-field'));
        Soundbolt.Utilities.showErrors($domElement, response);
      }
    })

  }
})
