window.onload = function(){

  saveCanvas = document.getElementById('save');
  saveCTX = saveCanvas.getContext("2d");
  var rect = saveCanvas.getBoundingClientRect();

  // $(window).on('mousemove', function(e) {
    
  //   var x = (e.clientX - rect.left) / 4,
  //       y = (e.clientY - rect.top) / 4;

  //   var xCoord = (x - (tileW / 2) - originX);
  //   var yCoord = (y - (tileH / 2) - originY);
  //   var tileX = Math.round((xCoord / tileW) - (yCoord / tileH));
  //   var tileY = Math.round((xCoord / tileW) + (yCoord / tileH));

  //   selectedTileX = tileX;
  //   selectedTileY = tileY;

  //   drawGame(map);
  // });

  drawGame(map);
};
