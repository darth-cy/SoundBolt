Soundbolt.Views.CommentSection = Backbone.View.extend({
  template: JST['comment_section'],
  className: "user-view-focus-comment-section container-fluid",

  events: {
    "submit #new-comment-form": "createComment"
  },

  initialize: function(options){
    this.collection = options.comments;
    this.listenTo(this.collection, 'sync add change', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ comments: this.collection });
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
    data.comment["timeline_position"] = 50.0; // WARNING: HARD CODED NON DYNAMIC TIMELINE TRACK

    var newComment = new Soundbolt.Models.Comment();

    newComment.save(data.comment, {
      success: function(){
        thisView.collection.add(newComment);
      }
    })
  }
})
