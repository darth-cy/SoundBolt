Soundbolt.Views.MiddleCanvas = Backbone.View.extend({
  template: JST['middle_canvas'],

  initialize: function(options){
    this.collection = options.comments;
    this.listenTo(this.collection, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ comments: this.collection });
    this.$el.html(content);
    return this;
  }
})
