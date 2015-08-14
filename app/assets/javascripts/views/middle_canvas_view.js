Soundbolt.Views.MiddleCanvas = Backbone.View.extend({
  template: JST['middle_canvas'],
  className: 'user-view-focus-middle container-fluid',

  initialize: function(options){
    this.model = options.track;
    this.collection = options.comments;
    this.audioMaster = options.audioMaster;

    this.listenTo(this.model, 'sync', this.render.bind(this));
    this.listenTo(this.collection, 'sync', this.render.bind(this));
  },

  // RAZYNOIR-INCOMPLETE: Middle canvas drawing not implemented.
  // RAZYNOIR-MAJOR: Middle canvas rendering not implemented.
  render: function(){
    var content = this.template({
       comments: this.collection,
       track: this.model
     });
    this.$el.html(content);
    return this;
  }
})
