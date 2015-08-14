Soundbolt.Views.TrackNewView = Backbone.View.extend({

  template: JST['track_new'],

  className: "user-view-normal-trackfield col-md-6",

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

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      var data = result[0];
      image.set({url: data.url, thumb_url: data.thumbnail_url});
      image.save({}, {
        success: function(){
          CloudinaryDemo.Collections.images.add(image);
        }
      });
    });


  }


})
