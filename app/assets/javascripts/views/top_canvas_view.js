Soundbolt.Views.TopCanvas = Backbone.View.extend({
  template: JST['top_canvas'],
  className: "user-view-focus-top container-fluid",

  initialize: function(options){
    this.model = options.track;
    this.listenTo(this.model, 'sync', this.render.bind(this));

    this._drawingSchedule = undefined;
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);

    // RAZYNOIR-WARNING: Rendering Frame too high.
    this._seekingSechdule = setInterval(this.seekAndDraw.bind(this), 10);
    return this;
  },

  remove: function(){
    if(this._drawingSchedule){
      this._drawingSchedule.destroy();
    }
  },

  seekAndDraw: function(){
    if(!this._drawingSchedule){
      var canvasEl = document.getElementById("focus-top-canvas");
      if(canvasEl){
        this.draw(canvasEl);
        clearInterval(this._seekingSchedule);
      }else{
        return 0;
      }
    }else{
      clearInterval(this._seekingSchedule);
    }
  },

  draw: function(canvasEl){
    this._drawingSchedule = new SnowLoop(
      canvasEl.offsetWidth,
      canvasEl.offsetHeight
    )
    this._drawingSchedule.start(canvasEl);
  }
})
