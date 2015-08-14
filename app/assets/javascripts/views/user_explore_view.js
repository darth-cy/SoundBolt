Soundbolt.Views.UserExplore = Backbone.FusedView.extend({
  template: JST['user_explore'],
  className: "user-view-normal-trackfield col-md-6",

  initialize: function(options){
    this.collection = options.users;

    this.addUsers();

    this.listenTo(this.collection, "add sync remove", this.updateRender.bind(this));
  },

  updateRender: function(){
    this.addUsers();
    this.render();
  },

  render: function(){
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.fusion();

    return this;
  },

  addUsers: function(){
    var thisField = this;
    thisField.emptyComponents();

    this.collection.each(function(user){
      var userView = new Soundbolt.Views.UserTab({ user: user });
      thisField.addComponent(userView);
    })
  }
})
