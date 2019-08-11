function animateMove(){

  if(keys.up){
    speedY = -1;
  }
  else if(keys.down){
    speedY = 1;
  }
  else{
    speedY = 0;
  }

  if(keys.left){
    speedX = -2;
  }
  else if(keys.right){
    speedX = 2;
  }
  else{
    speedX = 0;
  }





  // How to change player coordinates and relate them to tiles?

  var tileXY = coordsToTile(player.x + player.sprite.originX, player.y + player.sprite.originY);
  selectedTileX = tileXY.x;
  selectedTileY = tileXY.y;







  drawGame(map);
  window.requestAnimationFrame(function(){

    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;

    animateMove();
  });
}







function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    refreshLoop();
  });
}

refreshLoop();










function toColor(colorObj){
  return 'rgba(' + colorValLimit(colorObj.r) + ',' + colorValLimit(colorObj.g) + ',' + colorValLimit(colorObj.b) + ',' + colorObj.a + ')';
}

function colorValLimit(color){
  if(color >= 255){
    color = 255;
  }

  if(color <= 0){
    color = 0;
  }

  return Math.round(color);
}

function colorSet(color){

  var colorCool = {
    r:color.r - 90,
    g:color.g - 20,
    b:color.b - 10,
    a:color.a
  };

  var colorWarm = {
    r:color.r - 10,
    g:color.g - 20,
    b:color.b - 90,
    a:color.a
  };

  maxHeight = map[0].length;
  var layerColors = [];

  for(var i = 0; i < maxHeight; ++i){
    layerColors.push({
      r:color.r + (15 * i),
      g:color.g + (15 * i),
      b:color.b + (12 * i),
      a:color.a
    });
  }

  var colorObj = {
    base: color,
    layers: layerColors,
    cool: colorCool,
    warm: colorWarm
  };

  return colorObj;
}

function coordsToTile(x, y){
  var rect = saveCanvas.getBoundingClientRect();

  var xCoord = (x - (tileW / 2) - originX);
  var yCoord = (y - (tileH / 2) - originY);
  var tileX = Math.round((xCoord / tileW) - (yCoord / tileH));
  var tileY = Math.round((xCoord / tileW) + (yCoord / tileH));
  return {x: tileX, y: tileY};
}

function tileToCoords(x, y){
  var rect = saveCanvas.getBoundingClientRect();

  var offX = (((x * tileW) / 2) + ((y * tileW) / 2) + originX) + (tileW / 2);
  var offY = (((y * tileH) / 2) - ((x * tileH) / 2) + originY) + (tileH / 2);
  return {x: offX, y: offY};
}