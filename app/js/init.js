window.onload = function(){

  saveCanvas = document.getElementById('save');
  saveCTX = saveCanvas.getContext("2d");
  saveCTX.filter = 'url(#remove-alpha)';

  var selectedTiles = coordsToTile(player.x + player.sprite.originX, player.y + player.sprite.originY);

  selectedTileX = selectedTiles.x;
  selectedTileY = selectedTiles.y;

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

  // Pre-render colors
  for(var i = 0; i < map.length; ++i){
    for(var j = 0; j < map[i].length; ++j){
      if(map[i][j]){
        var tileColorSet = colorSet(map[i][j].tile);
        map[i][j].tile = {
          base: toColor(tileColorSet.layers[j]),
          warm: toColor(tileColorSet.warm),
          cool: toColor(tileColorSet.cool)
        };

        // Check for shadows
        for(var k = j + 1; k < maxHeight; ++k){
          if(map[i][k]){
            map[i][j].tile.base = toColor(tileColorSet.cool);
            break;
          }
        }

      }
    }
  }

  window.onkeydown = function(e) {
    switch(e.which) {

      case 87: // W
        keys.up = true;
        break;

      case 65: // A
        keys.left = true;
        break;

      case 83: // S
        keys.down = true;
        break;

      case 68: // D
        keys.right = true;
        break;
    };
  };

  window.onkeyup = function(e) {
    switch(e.which) {

      case 87: // W
        keys.up = false;
        break;

      case 65: // A
        keys.left = false;
        break;

      case 83: // S
        keys.down = false;
        break;

      case 68: // D
        keys.right = false;
        break;
    };
  };

  drawGame(map);
  window.requestAnimationFrame(function(){
    animateMove();
  });

  var fpsMonitor = setInterval(function(){
    $('.message').text(fps);
  }, 700);
};
