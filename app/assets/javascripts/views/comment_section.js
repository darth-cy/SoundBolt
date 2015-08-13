Soundbolt.Views.CommentSection = Backbone.View.extend({
  template: JST['comment_section'],
  className: "user-view-focus-comment-section container-fluid",

  events: {
    "submit #new-comment-form", "createComment"
  }

  initialize: function(options){
    this.collection = options.comments;
    this.listenTo(this.collection, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ comments: this.collection });
    this.$el.html(content);
    return this;
  },

  createComment: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var data = $form.serializeJSON();
  }
})
