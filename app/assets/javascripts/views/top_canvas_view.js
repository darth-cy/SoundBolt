Soundbolt.Views.TopCanvas = Backbone.View.extend({
  template: JST['top_canvas'],
  className: "user-view-focus-top container-fluid",

  initialize: function(options){
    this.model = options.track;
    this.listenTo(this.model, 'sync', this.render.bind(this));
    this._drawingSchedule = undefined;
    this._seekingSechdule = setInterval(this.seekAndDraw.bind(this), 1000);
  },

  render: function(){
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  },

  seekAndDraw: function(){
    if(!this._drawingSchedule){
      var canvasEl = document.getElementById("focus-top-canvas");
      if(canvasEl){
        this.draw(canvasEl);
        clearInterval(this._seekingSchedule);
      }else{
        return;
      }
    }else{
      clearInterval(this._seekingSchedule);
    }
  },

  draw: function(canvasEl){
    // canvasEl.height = window.innerHeight;
    // canvasEl.width = window.innerWidth;
    console.log("drawing!");

    this._drawingSchedule = new SnowLoop(
      canvasEl.offsetWidth,
      canvasEl.offsetHeight
    )
    debugger;

    this._drawingSchedule.start(canvasEl);

    // var ctx = canvasEl.getContext("2d");
    //
    // ctx.clearRect(0, 0, canvasEl.offsetWidth, canvasEl.offsetHeight);
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(0, 0, canvasEl.offsetWidth, canvasEl.offsetHeight);

    // var game = new Asteroids.Game();
    // new Asteroids.GameView(game, ctx).start();
  }
})
