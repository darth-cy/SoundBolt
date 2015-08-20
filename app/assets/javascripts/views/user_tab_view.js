Soundbolt.Views.UserTab = Backbone.View.extend({
  template: JST['user_tab'],
  className: 'track-tab container-fluid',

  events: {
    "click .btn-primary": "followUser",
    "click .btn-warning": "seeInfoUser",
    "click .btn-danger": "unfollowUser",
    "click .user-tab-username": "seeInfoUser"
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

  followUser: function(event){
    event.preventDefault();
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
    var modalField = $("#soundbolt-modal-field-master");
    var modalView = new Soundbolt.Views.UserModal({
      currentUser: this.currentUser,
      user: this.model
    })
    modalField.html(modalView.render().$el);
  },

  unfollowUser: function(event){
    event.preventDefault();
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
