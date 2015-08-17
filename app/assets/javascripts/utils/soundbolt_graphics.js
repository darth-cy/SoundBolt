Soundbolt.Graphics.drawMusicBlock = function(context, startX, startY, width, height){
  context.fillRect(startX, startY - height, startX + width, startY);
};

Soundbolt.Graphics.drawMusicWave = function(context, data, startX, startY, blockWidth){
  for(var i = 0; i < data.length; i++){
    var height = parseInt(data[i]);
    Soundbolt.Graphics.drawMusicBlock(context, startX + i * blockWidth, startY, blockWidth, height);
  }
};

Soundbolt.Graphics.drawWaveForm = function(audioMaster, canvasEl){
  dataPoints = Math.floor(audioMaster.length());
  data = Array.apply(null, Array(dataPoints)).map(function(){
      return Math.random() * 10;
  });
  var ctx = canvasEl.getContext('2d');
  Soundbolt.Graphics.drawMusicWave(ctx, datam, 100, 100, 10);
};
