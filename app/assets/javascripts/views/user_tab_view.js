Soundbolt.Views.UserTab = Backbone.View.extend({
  template: JST['user_tab'],
  className: 'track-tab panel-body container-fluid',

  // RAZYNOIR-INCOMPLETE: Following functionalities and see info medal not implemented.
  events: {
    "click btn-primary": "followUser",
    "click btn-warning": "seeInfoUser"
  },

  initialize: function(options){
    this.model = options.user;
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  // RAZYNOIR-INCOMPLETE: Following function and SeeInfo function not implemented.
  // RAZYNOIR-MAJOR: Follow user functionality not available.
  followUser: function(){

  },

  seeInfoUser: function(){

  }
})
