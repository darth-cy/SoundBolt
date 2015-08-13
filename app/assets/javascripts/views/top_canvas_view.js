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
    
    setInterval(this.draw, 2000);
    return this;
  },

  draw: function(){
    var canvasEl = document.getElementById("focus-top-canvas");
    console.log("seeking canvas!");

    if(!canvasEl){ return; }
    console.log("drawing!");

    var ctx = canvasEl.getContext("2d");

    ctx.clearRect(0, 0, canvasEl.offsetWidth, canvasEl.offsetHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, canvasEl.offsetWidth, canvasEl.offsetHeight);

    // var game = new Asteroids.Game();
    // new Asteroids.GameView(game, ctx).start();
  }
})
