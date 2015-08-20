Soundbolt.Views.TrackView = Backbone.View.extend({
  template: JST['track'],
  className: 'track-tab container-fluid',

  events: {
    "click #track-switch": "switchTrack",
    "click #track-delete": "deleteTrack",
    "click .track-tab-title": "switchTrack",
    "click .track-tab-username": "seeInfoUser",
    "click img": "seeInfoUser"
  },

  initialize: function(options){
    this.collection = options.tracks;

    this.user = options.user;
    this.artist = options.artist;

    this.model = options.track;
    this.own = options.own;

    this.listenTo(this.model, 'sync', this.render().$el);
  },

  render: function(){
    var content = this.template({
      track: this.model,
      own: this.own
    });
    this.$el.html(content);

    this.$el.find('#track-edit').data('track_id', this.model.id);

    return this;
  },

  switchTrack: function(event){
    event.preventDefault();
    Backbone.history.navigate("trackswitch/" + this.model.id, { trigger: true });
  },

  deleteTrack: function(event){
    event.preventDefault();

    var thisView = this;

    thisView.model.destroy({
      success: function(){
        thisView.collection.remove(thisView.model);
        thisView.user.fetch();
      }
    });
  },

  seeInfoUser: function(event){
    event.preventDefault();

    var modalField = $("#soundbolt-modal-field-master");
    var modalView = new Soundbolt.Views.UserModal({
      currentUser: this.user,
      user: this.artist
    })
    modalField.html(modalView.render().$el);
  }
})
