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

    this.loading = false;

    this.listenTo(this.model, 'sync', this.syncRender.bind(this));
  },

  syncRender: function(){
    this.loading = false;
    this.render();
  },

  addSpinner: function(){
    this.$el.find(".spin-button").prop("disabled", true);
    this.$el.find(".spin-button > a").after(new Spinner(window.spinnerOpts).spin().el);
  },

  render: function(){
    var content = this.template({
      currentUser: this.currentUser,
      user: this.model
    })
    this.$el.html(content);

    var $popOut = this.$el.find(".user-info-popout-panel");
    $popOut.css("margin-top", $(window).scrollTop() + 100 + "px");

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

    this.loading = true;
    this.addSpinner();

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

    this.loading = true;
    this.addSpinner();

    followingToDelete.destroy({
      success: function(){
        thisView.model.fetch();
        thisView.currentUser.fetch();
      }
    });
  }
})
