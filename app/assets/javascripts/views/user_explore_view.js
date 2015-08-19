Soundbolt.Views.UserExplore = Backbone.FusedView.extend({
  template: JST['user_explore'],
  className: "user-view-normal-trackfield col-md-8",

  initialize: function(options){
    this.collection = options.users;
    this.model = options.user;

    this.addUsers();

    this.listenTo(this.collection, "add sync remove", this.updateRender.bind(this));
  },

  updateRender: function(){
    this.addUsers();
    this.render();
  },

  render: function(){
    // var searchBar = JST['search_bar']();
    var content = this.template({ users: this.collection });
    // this.$el.html(searchBar + content);
    this.$el.html(content);
    this.fusion();

    return this;
  },

  addUsers: function(){
    var thisField = this;
    thisField.emptyComponents();

    this.collection.each(function(user){
      if(user.id === thisField.model.id) { return 0; };

      // console.log(user.follower_ids.indexOf(thisField.model.id) !== -1)

      var userView = new Soundbolt.Views.UserTab({
        currentUser: thisField.model,
        user: user
      });

      thisField.addComponent(userView);
    })
  }
})
