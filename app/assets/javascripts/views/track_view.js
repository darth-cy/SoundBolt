Soundbolt.Views.TrackView = Backbone.View.extend({
  template: JST['track'],
  className: 'track-tab container-fluid',

  events: {
    "click #track-switch": "switchTrack",
    "click #track-delete": "deleteTrack"
  },

  initialize: function(options){
    this.collection = options.tracks;

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
    return this;
  },

  switchTrack: function(event){
    event.preventDefault();
    Backbone.history.navigate("trackswitch/" + this.model.id, { trigger: true });
  },

  deleteTrack: function(event){
    event.preventDefault();

    var thisView = this;

    var deleteTrack = new Soundbolt.Models.Track({ id: this.model.id });
    deleteTrack.destroy({
      success: function(){
        thisView.collection.fetch();
      }
    });
  }
})
