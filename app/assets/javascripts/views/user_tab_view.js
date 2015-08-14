Soundbolt.Views.UserTab = Backbone.View.extend({
  template: JST['user_tab'],
  className: 'track-tab panel-body container-fluid',

  // RAZYNOIR-INCOMPLETE: Following functionalities and see info medal not implemented.
  events: {
    "click .btn-primary": "followUser",
    "click .btn-warning": "seeInfoUser",
    "click .btn-danger": "unfollowUser"
  },

  initialize: function(options){
    this.model = options.user;
    this.currentUser = options.currentUser;

    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      user: this.model,
      currentUser: this.currentUser
    });

    this.$el.html(content);
    return this;
  },

  // RAZYNOIR-INCOMPLETE: Following function and SeeInfo function not implemented.
  // RAZYNOIR-MAJOR: Follow user functionality not available.
  followUser: function(event){
    event.preventDefault();
    debugger;
    var thisView = this;

    var newFollowing = new Soundbolt.Models.Following();
    newFollowing.set({
      followed_user_id: this.model.id,
      following_user_id: this.currentUser.id,
    })

    newFollowing.save({}, {
      success: function(){
        thisView.model.fetch();
        thisView.currentUser.fetch();
      }
    });

  },

  seeInfoUser: function(event){
    event.preventDefault();

  },

  unfollowUser: function(event){
    event.preventDefault();
    debugger;
    var thisView = this;

    var followingToDelete = this.model.followings().where({
      followed_id: this.model.id,
      following_id: this.currentUser.id
    })[0];

    followingToDelete.destroy({
      success: function(){
        thisView.model.fetch();
        thisView.currentUser.fetch();
      }
    });
  }
})
