Soundbolt.Views.UserTab = Backbone.View.extend({
  template: JST['user_tab'],
  className: 'track-tab panel-body container-fluid',

  events: {

  },

  initialize: function(options){
    this.model = options.user;
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
})
