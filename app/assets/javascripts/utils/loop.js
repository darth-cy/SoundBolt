(function(){
  if(typeof Snowballs === "undefined"){
    window.SnowBalls = {};
  }

  SnowLoop = SnowBalls.SnowLoop = function(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.snowballs = [];
  }

  SnowLoop.density = 1;

  SnowLoop.prototype.render = function(ctx){
    ctx.clearRect(0, 0, this.xDim, this.yDim);

    // ctx.scale(0.5, 0.5); // WARNING: Scale the canvas

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,this.xDim,this.yDim);

    this.snowballs.forEach(function (snowball) {
      snowball.render(ctx);
    });

    colors = ["red", "blue", "white", "yellow", "green"];
    ctx.fillStyle = colors[Math.floor(Math.random() * 4)];
  }

  SnowLoop.prototype.move = function(){
    var loop = this;
    loop.snowballs.forEach(function(snowball){
      snowball.move(loop.yDim);
    });
  }

  SnowLoop.prototype.createSnow = function(numSnowBalls){
    var loop = this;
    for(var i = 0; i < numSnowBalls; i++){
      this.snowballs.push(
        SnowBall.randomSnowBall(loop.xDim, loop.yDim, SnowLoop.density)
      )
    }
  }

  SnowLoop.prototype.deleteSnow = function(){
    loop = this;
    newSnowBalls = [];
    loop.snowballs.forEach(function(snowball){
      if(snowball.yCord !== loop.yDim){
        newSnowBalls.push(snowball)
      };
    })
    loop.snowballs = newSnowBalls;
  }

  SnowLoop.prototype.destroy = function(){
    clearInterval(this._interval);
  }

  SnowLoop.prototype.start = function (canvasEl) {
    // get a 2d canvas drawing context. The canvas API lets us call
    // a `getContext` method on a canvas DOM element.
    var ctx = canvasEl.getContext("2d");

    // render at 60 FPS
    this._interval = window.setInterval((function () {

      // RAZYNOIR-TEST: Output to test repeated drawing schedule.
      console.log("Top Canvas Drawing!")
      this.createSnow(SnowLoop.density);
      this.deleteSnow();
      this.move();
      this.render(ctx);
    }).bind(this), 1000 / 60);
  };
})();
