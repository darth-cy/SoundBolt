Soundbolt.Graphics.drawMusicBlock = function(context, startX, startY, width, height, fillStyle){
  context.fillStyle = fillStyle;
  context.fillRect(startX, startY - height, width, height);
};

Soundbolt.Graphics.drawMusicWave = function(context, data, startX, startY, blockWidth, currentTime){
  for(var i = 0; i < data.length; i++){
    var height = parseInt(data[i]);

    if(i > currentTime){
      var fillStyle = "#424242";
    }else{
      var fillStyle = "#FF00FF";
    }
    Soundbolt.Graphics.drawMusicBlock(context, startX + i * blockWidth, startY, blockWidth, height, fillStyle);
  }
};

Soundbolt.Graphics.drawWaveForm = function(audioMaster, canvasEl){
  if(!audioMaster || !canvasEl){ return  0; }

  dataPoints = Math.floor(audioMaster.duration);
  data = Array.apply(null, Array(dataPoints)).map(function(){
      return Math.floor(Math.random() * 50) + (canvasEl.height / 3);
  });

  var ctx = canvasEl.getContext('2d');
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

  startX = 30;
  startY = canvasEl.height - 30;
  blockWidth = (canvasEl.width - 60) / dataPoints;
  currentTime = Math.floor(audioMaster.currentTime);

  Soundbolt.Graphics.drawMusicWave(ctx, data, startX, startY, blockWidth, currentTime);
};
