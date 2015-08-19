Soundbolt.Views.UserModal = Backbone.View.extend({
  template: JST['modal'],

  events: {
    "click #modal-close-button": "removeModal",
    "click #modal-track-switch": "switchTrack"
  },

  initialize: function(options){
    this.model = options.user;
    this.model.fetch();

    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      user: this.model
    })
    this.$el.html(content);
    return this;
  },

  removeModal: function(event){
    event.preventDefault();
    this.remove();
  },

  switchTrack: function(event){
    event.preventDefault();
    var track_id = $(event.currentTarget).data('track-id');
    Backbone.history.navigate("trackswitch/" + track_id, { trigger: true });
  }
})
