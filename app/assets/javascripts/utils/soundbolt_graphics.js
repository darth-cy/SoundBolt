Soundbolt.Graphics.drawMusicBlock = function(context, startX, startY, width, height){
  context.fillStyle = "#C0C0C0";
  context.fillRect(startX, startY - height, width, height);
};

Soundbolt.Graphics.drawMusicWave = function(context, data, startX, startY, blockWidth){
  for(var i = 0; i < data.length; i++){
    var height = parseInt(data[i]);
    Soundbolt.Graphics.drawMusicBlock(context, startX + i * blockWidth, startY, blockWidth, height);
  }
};

Soundbolt.Graphics.drawWaveForm = function(audioMaster, canvasEl){
  if(!audioMaster || !canvasEl){ return  0; }

  dataPoints = 20;
  data = Array.apply(null, Array(dataPoints)).map(function(){
      return Math.floor(Math.random() * 20) + 1;
  });

  var ctx = canvasEl.getContext('2d');
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  Soundbolt.Graphics.drawMusicWave(ctx, data, 10, 100, 5);
};
