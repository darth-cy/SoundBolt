Soundbolt.Views.UserFocus = Backbone.FusedView.extend({
  template: JST['user_focus'],

  className: 'user-view-focus-master',

  events: {

  },

  initialize: function(options){
    this.model = options.track;

    this.addTopCanvas();
    this.addMiddleCanvas();
    this.addCommentSection();

    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  addTopCanvas: function(){
    var track = this.model;
  },

  addMiddleCanvas: function(){
    var comments = this.model.comments();

  },

  addCommentSection: function(){
    var comments = this.model.comments();

  },

  render: function(){

  }
})
