function drawGameMulti(map){
  saveCTX.clearRect(0, 0, saveCanvas.width, saveCanvas.height);

  var layer = originY;

  for(var i = 0; i < map.length; ++i){

    for(var x = (mapW - 1); x >= 0; x--) {
      for(var y = 0; y < mapH; y++) {

        var currentPos = ((y*mapW)+x);
        var color = {base:'', depth:''};

        if(map[i][currentPos]){
          if(map[i][currentPos] == 1){
            // color.base = greens[Math.floor(Math.random() * Math.floor(3))];
            color.base = greens[0];
            color.depth = '#0B1';
          }
          else {
            color.base = '#88F';
            color.depth = '#44B';
          }

          if( x == selectedTileX && y == selectedTileY){
            color.base = 'yellow';
          }

          drawTile(x, y, color, layer);
          tileIndex++;
        }
      }
    }

    layer = layer - layerDepth;

  }
}

function drawGame(map){
  saveCTX.clearRect(0, 0, saveCanvas.width, saveCanvas.height);

  var layer = originY;

  for(var i = 0; i < map[0].length; ++i){

    for(var x = (mapW - 1); x >= 0; x--) {
      for(var y = 0; y < mapH; y++) {

        var currentPos = ((y*mapW)+x);
        var color = {base:'', depth:''};

        if(map[currentPos][i]){
          if(map[currentPos][i] == 1){
            // color.base = greens[Math.floor(Math.random() * Math.floor(3))];
            color.base = greens[0];
            color.depth = '#0B1';
          }
          else {
            color.base = '#88F';
            color.depth = '#44B';
          }

          if( x == selectedTileX && y == selectedTileY){
            color.base = 'yellow';
          }

          drawTile(x, y, color, layer);
          tileIndex++;
        }
      }
    }

    layer = layer - layerDepth;

  }
}

function drawTile(x, y, color, layer){
  var offX = ((x * tileW) / 2) + ((y * tileW) / 2) + originX;
  var offY = ((y * tileH) / 2) - ((x * tileH) / 2) + layer;

  // Draw tile depth
  saveCTX.fillStyle = color.depth;
  saveCTX.strokeStyle = color.depth;
  saveCTX.beginPath();
  saveCTX.lineWidth = 1.1;
  saveCTX.moveTo(offX, offY + tileH / 2);
  saveCTX.lineTo(offX, (offY + tileH / 2) + layerDepth);
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) + layerDepth);
  saveCTX.lineTo(offX + tileW, (offY + tileH / 2) + layerDepth);
  saveCTX.lineTo(offX + tileW, (offY + tileH / 2));
  saveCTX.stroke();
  saveCTX.fill();
  saveCTX.closePath();

  // Draw tile surface
  saveCTX.fillStyle = color.base;
  saveCTX.strokeStyle = color.base;
  saveCTX.beginPath();
  saveCTX.lineWidth = 1.1;
  saveCTX.moveTo(offX, offY + tileH / 2);
  saveCTX.lineTo(offX + tileW / 2, offY, offX + tileW, offY + tileH / 2);
  saveCTX.lineTo(offX + tileW, offY + tileH / 2, offX + tileW / 2, offY + tileH);
  saveCTX.lineTo(offX + tileW / 2, offY + tileH, offX, offY + tileH / 2);
  saveCTX.stroke();
  saveCTX.fill();
  saveCTX.closePath();
}

function drawLine(x1, y1, x2, y2, color) {
  saveCTX.strokeStyle = color;
  saveCTX.beginPath();
  saveCTX.lineWidth = 1;
  saveCTX.moveTo(x1, y1);
  saveCTX.lineTo(x2, y2);
  saveCTX.stroke();
}

function drawPlayer(tile) {

}
