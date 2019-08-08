function drawGame(map){
  saveCTX.clearRect(0, 0, saveCanvas.width, saveCanvas.height);
  tileIndex = 0;

  var layer = originY;

  maxHeight = map[0].length;

  for(var i = 0; i < maxHeight; ++i){

    for(var x = (mapW - 1); x >= 0; x--) {
      for(var y = 0; y < mapH; y++) {

        var currentPos = ((y*mapW)+x);
        var color = {base:'',warm:'',cool:''};

        if(map[currentPos][i]){

          color.base = map[currentPos][i].tile.base;
          color.warm = map[currentPos][i].tile.warm;
          color.cool = map[currentPos][i].tile.cool;

          drawTile(x, y, color, layer, false);
          tileIndex++;







          // When to draw player in tile order? How to make sure player is on top tile layer?
          var top = true;
          for(var k = i + 1; k < maxHeight; ++k){
            if(map[currentPos][k]){
              top = false;
            }
          }

          if(x == selectedTileX && y == selectedTileY && top){
            drawPlayer(saveCTX, player.x, player.y, layer, player.sprite.render, player.width, player.height);
          }









          if(map[currentPos][i].sprite){
            drawSprite(saveCTX, x, y, map[currentPos][i].sprite, 10, 20);
          }
        }
      }
    }

    layer = layer - layerDepth;

  }



  saveCTX.fillStyle = '#FF0';
  saveCTX.fillRect(selectedTileX, selectedTileY, 1, 1);
}

function drawTile(x, y, color, layer, test){
  var offX = ((x * tileW) / 2) + ((y * tileW) / 2) + originX;
  var offY = ((y * tileH) / 2) - ((x * tileH) / 2) + layer;

  var lineFill = 1;

  // Draw tile depth east
  saveCTX.fillStyle = color.cool;
  saveCTX.strokeStyle = color.cool;
  saveCTX.beginPath();
  saveCTX.lineWidth = lineFill;
  saveCTX.moveTo(offX + tileW, (offY + tileH / 2)); // >
  saveCTX.lineTo(offX + tileW, (offY + tileH / 2) + layerDepth); // |
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) + layerDepth); // /
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) - (tileH / 2)); // |
  saveCTX.stroke();
  saveCTX.fill();
  saveCTX.closePath();

  // Draw tile depth south
  saveCTX.fillStyle = color.warm;
  saveCTX.strokeStyle = color.warm;
  saveCTX.beginPath();
  saveCTX.lineWidth = lineFill;
  saveCTX.moveTo(offX, offY + tileH / 2); // <
  saveCTX.lineTo(offX, (offY + tileH / 2) + layerDepth); // |
  saveCTX.lineTo(offX + tileW / 2, (offY + tileH) + layerDepth); // \
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

  if(test){

    saveCTX.fillStyle = 'orange';
    saveCTX.font = "7px Arial";
    saveCTX.fillText(test, (offX + 6), (offY + 6));
  }
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

function drawPlayer(thisCTX, posX, posY, layer, thisSprite, sizeX, sizeY){

  // NO DELETE. Need this to convert tile coords to pixel coords
  // var offX = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2) + speedX;
  // var offY = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2) + speedY;

  posY = posY + layer;

  var offX = posX + speedX;
  var offY = posY + speedY;

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

  player.x = offX;
  player.y = offY;
}
