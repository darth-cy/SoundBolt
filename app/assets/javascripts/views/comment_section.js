Soundbolt.Views.CommentSection = Backbone.View.extend({
  template: JST['comment_section'],
  className: "user-view-focus-comment-section container-fluid",

  events: {
    "submit #new-comment-form": "createComment"
  },

  initialize: function(options){
    this.collection = options.comments;
    this.audioMaster = options.audioMaster;

    this.listenTo(this.collection, 'sync add change', this.render.bind(this));
  },

  render: function(){
    var content = this.template({
      comments: this.collection,
      audioMaster: this.audioMaster
    });
    this.$el.html(content);
    return this;
  },

  createComment: function(event){
    event.preventDefault();
    var thisView = this;

    var $form = $(event.currentTarget);
    var data = $form.serializeJSON();

    data.comment["user_id"] = window.currentUserId;
    data.comment["track_id"] = window.currentTrackId;
    data.comment["timeline_position"] = Number(this.audioMaster.currentTime.toFixed(1));

    // RAZYNOIR-WARNING: Hard Coded non-dynamic timeline tracking.
    // RAZYNOIR-INCOMPLETE: Track tracing incomplete.
    // RAZYNOIR-MAJOR: Timeline utility not implemented.
    // data.comment["timeline_position"] = 50.0;

    var newComment = new Soundbolt.Models.Comment();

    newComment.save(data.comment, {
      success: function(model){
        thisView.collection.add(model);
      }
    })
  }
})
