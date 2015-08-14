Soundbolt.Views.UserFocus = Backbone.FusedView.extend({
  template: JST['user_focus'],

  className: 'user-view-focus-master',

  events: {

  },

  initialize: function(options){
    this.model = options.track;

    this.audioMaster = document.getElementById("player-master-audio");

    this.addTopCanvas();
    this.addMiddleCanvas();
    this.addCommentSection();

    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  addTopCanvas: function(){
    var track = this.model;
    var topCanvas = new Soundbolt.Views.TopCanvas({ track: track });
    this.addComponent(topCanvas);
  },

  addMiddleCanvas: function(){
    var audioMaster = this.audioMaster;
    var track = this.model;
    var comments = this.model.comments();
    var middleCanvas = new Soundbolt.Views.MiddleCanvas({
       track: track,
       comments: comments,
       audioMaster: audioMaster
     });
    this.addComponent(middleCanvas);
  },

  addCommentSection: function(){
    var comments = this.model.comments();
    var commentSection = new Soundbolt.Views.CommentSection({ comments: comments });
    this.addComponent(commentSection);
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    this.fusion();
    return this;
  }
})
