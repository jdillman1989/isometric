window.onload = function(){

  saveCanvas = document.getElementById('save');
  saveCTX = saveCanvas.getContext("2d");
  var rect = saveCanvas.getBoundingClientRect();

  $(window).on('mousemove', function(e) {
    
    var x = (e.clientX - rect.left) / 4,
        y = (e.clientY - rect.top) / 4;

    var xCoord = (x - (tileW / 2) - originX);
    var yCoord = (y - (tileH / 2) - originY);
    var tileX = Math.round((xCoord / tileW) - (yCoord / tileH));
    var tileY = Math.round((xCoord / tileW) + (yCoord / tileH));

    selectedTileX = tileX;
    selectedTileY = tileY;

    drawGame(map);
  });

  $(document).keydown(function(e) {

    switch(e.which) {

      case 87: // W
        speedY = -1;
        break;

      case 65: // A
        speedX = -2;
        break;

      case 83: // S
        speedY = 1;
        break;

      case 68: // D
        speedX = 2;
        break;
    }

    drawGame(map);
  });

  drawGame(map);
};
