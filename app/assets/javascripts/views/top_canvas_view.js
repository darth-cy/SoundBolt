Soundbolt.Views.TopCanvas = Backbone.View.extend({
  template: JST['top_canvas'],
  className: "user-view-focus-top container-fluid",

  initialize: function(options){
    this.model = options.track;
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  }
})
