Soundbolt.Graphics.drawMusicBlock = function(context, startX, startY, width, height, fillStyle){
  context.fillStyle = fillStyle;
  context.fillRect(startX, startY - height, width, height);
};

Soundbolt.Graphics.drawMusicWave = function(context, data, startX, startY, blockWidth, currentTime, cursorTime){
  for(var i = 0; i < data.length; i++){
    var height = parseInt(data[i]);

    if(i < currentTime){
      var fillStyle = "#FF00FF";
    }else if(cursorTime && i < cursorTime){
      var fillStyle = "#542D54";
    }else{
      var fillStyle = "#424242";
    }
    Soundbolt.Graphics.drawMusicBlock(context, startX + i * blockWidth, startY, blockWidth, height, fillStyle);
  }
};

Soundbolt.Graphics.drawWaveForm = function(data, dataPoints, audioMaster, canvasEl, cursorTime){
  if(!audioMaster || !canvasEl){ return  0; }

  var ctx = canvasEl.getContext('2d');
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

  startX = 30;
  startY = canvasEl.height - 30;
  blockWidth = (canvasEl.width - 60) / dataPoints;
  currentTime = Math.floor(audioMaster.currentTime);

  Soundbolt.Graphics.drawMusicWave(ctx, data, startX, startY, blockWidth, currentTime, cursorTime);
};
