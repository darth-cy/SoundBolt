Soundbolt.Views.UserModal = Backbone.View.extend({
  template: JST['modal'],

  events: {
    "click #modal-close-button": "removeModal",

    "click .modal-track-switch": "switchTrack",
    "click #modal-follow-user": "followUser",
    "click #modal-unfollow-user": "unfollowUser",
  },

  initialize: function(options){
    this.currentUser = options.currentUser;
    this.model = options.user;
    this.model.fetch();

    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      currentUser: this.currentUser,
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
