function drawGame(map){
  saveCTX.clearRect(0, 0, saveCanvas.width, saveCanvas.height);

  var layer = originY;

  maxHeight = map[0].length;

  for(var i = 0; i < maxHeight; ++i){

    for(var x = (mapW - 1); x >= 0; x--) {
      for(var y = 0; y < mapH; y++) {

        var currentPos = ((y*mapW)+x);
        var color = {base:'',south:'',east:''};

        if(map[currentPos][i]){

          color.base = map[currentPos][i].tile.base;
          color.south = map[currentPos][i].tile.south;
          color.east = map[currentPos][i].tile.east;

          // Check for shadows
          for(var j = i + 1; j < maxHeight; ++j){
            if(map[currentPos][j]){
              color.base = map[currentPos][i].tile.south;
              break;
            }
          }

          if( x == selectedTileX && y == selectedTileY){
            color.base = '#FF0';
          }

          drawTile(x, y, color, layer);
          tileIndex++;

          if(map[currentPos][i].sprite){
            drawSprite(saveCTX, x, y, map[currentPos][i].sprite, 10, 20);
          }
        }
      }
    }

    layer = layer - layerDepth;

  }
}

function drawTile(x, y, color, layer){
  var offX = ((x * tileW) / 2) + ((y * tileW) / 2) + originX;
  var offY = ((y * tileH) / 2) - ((x * tileH) / 2) + layer;

  var lineFill = 0.1;

  // Draw tile depth south
  saveCTX.fillStyle = color.south;
  saveCTX.strokeStyle = color.south;
  saveCTX.beginPath();
  saveCTX.lineWidth = lineFill;
  saveCTX.moveTo(offX, offY + tileH / 2); // <
  saveCTX.lineTo(offX, (offY + tileH / 2) + layerDepth); // |
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) + layerDepth); // \
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) - (tileH / 2)); // |
  saveCTX.stroke();
  saveCTX.fill();
  saveCTX.closePath();

  // Draw tile depth east
  saveCTX.fillStyle = color.east;
  saveCTX.strokeStyle = color.east;
  saveCTX.beginPath();
  saveCTX.lineWidth = lineFill;
  saveCTX.moveTo(offX + tileW, (offY + tileH / 2)); // >
  saveCTX.lineTo(offX + tileW, (offY + tileH / 2) + layerDepth); // |
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) + layerDepth); // /
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) - (tileH / 2)); // |
  saveCTX.stroke();
  saveCTX.fill();
  saveCTX.closePath();

  // Draw tile surface
  saveCTX.fillStyle = color.base;
  saveCTX.strokeStyle = color.base;
  saveCTX.beginPath();
  saveCTX.lineWidth = lineFill;
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

function drawSprite(thisCTX, posX, posY, thisSprite, sizeX, sizeY){

  var offX = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2);
  var offY = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2);

  var k = 0;
  for(var y = offY; y < offY + sizeY; ++y){
    for(var x = offX; x < offX + sizeX; ++x){

      if(thisSprite[k]){
        thisCTX.fillStyle = thisSprite[k];
        thisCTX.fillRect(x, y, 1, 1);
      }
      k++;
    }
  }
}
