Soundbolt.Views.CommentSection = Backbone.View.extend({
  template: JST['comment_section'],
  className: "user-view-focus-comment-section container-fluid",

  events: {
    "submit #new-comment-form": "createComment"
  },

  initialize: function(options){
    this.collection = options.comments;
    this.audioMaster = options.audioMaster;

    this.synSchedule = undefined;

    this.listenTo(this.collection, 'sync add change', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      comments: this.collection,
      audioMaster: this.audioMaster
    });
    this.$el.html(content);
    this.newSyncSchedule();
    return this;
  },

  remove: function(){
    debugger;
    clearInterval(this.syncSchedule);
  },

  newSyncSchedule: function(){
    if(this.syncSchedule){
      clearInterval(this.syncSchedule);
    }
    this.syncSchedule = setInterval(this.updateInfo.bind(this), 1000);
  },

  updateInfo: function(){
    var $commentPanel = $(document.getElementById('comment-info-panel'));
    $commentPanel.html(JST['comment_info']({ audioMaster: this.audioMaster }))
  },

  createComment: function(event){
    event.preventDefault();
    var thisView = this;

    var $form = $(event.currentTarget);
    var data = $form.serializeJSON();

    data.comment["user_id"] = window.currentUserId;
    data.comment["track_id"] = window.currentTrackId;
    data.comment["timeline_position"] = Number(this.audioMaster.currentTime.toFixed(1));

    var newComment = new Soundbolt.Models.Comment();

    newComment.save(data.comment, {
      success: function(model){
        thisView.collection.add(model);
      }
    })
  }
})
