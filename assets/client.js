// Canvas Element
var saveCanvas = null;

// Canvas Draw
var saveCTX = null;

// Static Globals
var tileW = 20,
    tileH = tileW / 2,
    mapW = 10,
    mapH = 10,
    originX = 0.5,
    originY = 72.5,
    layerDepth = 5;

var speedX = 0,
    speedY = 0;

var keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

var tileIndex = 0;

var selectedTileX = -1,
    selectedTileY = -1;

var tiles = {
  grass: {r:125,g:196,b:143,a:1},
  water: {r:86,g:75,b:100,a:1},
  rock: {r:188,g:167,b:82,a:1},
  lava: {r:209,g:105,b:42,a:1}
};

var r = '#F00';
var d = '#B00';
var b = '#0B1';

var player = {x:100, y:75, width: 10, height: 20};
var playerSprite = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,r,r,0,0,0,0,
  0,0,r,r,r,r,r,r,0,0,
  0,r,r,r,r,r,r,r,r,0,
  0,d,r,r,r,r,r,r,d,0,
  0,d,d,d,r,r,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,d,d,d,d,d,d,d,d,0,
  0,0,d,d,d,d,d,d,0,0,
  0,0,0,0,d,d,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

var map = [

  //////////////////////
  // Row 1 (top left) //
  //////////////////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],


  ///////////
  // Row 2 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],


  ///////////
  // Row 3 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],


  ///////////
  // Row 4 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],


  ///////////
  // Row 5 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],


  ///////////
  // Row 6 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.lava,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    {
      tile: tiles.grass,
      sprite: 0
    }
  ],


  ///////////
  // Row 7 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],


  ///////////
  // Row 8 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    {
      tile: tiles.rock,
      sprite: 0
    },
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],


  ///////////
  // Row 9 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    0,
    {
      tile: tiles.grass,
      sprite: 0
    },
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],


  ///////////
  // Row 10 //
  ///////////

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ],

  [
    {
      tile: tiles.water,
      sprite: 0
    },
    0,
    0,
    0,
    0
  ]
];

function drawGame(map){
  saveCTX.clearRect(0, 0, saveCanvas.width, saveCanvas.height);

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

  drawPlayer(saveCTX, player.x, player.y, playerSprite, player.width, player.height);
}

function drawTile(x, y, color, layer){
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

function drawPlayer(thisCTX, posX, posY, thisSprite, sizeX, sizeY){

  // NO DELETE. Need this to convert tile coords to pixel coords
  // var offX = (((posX * tileW) / 2) + ((posY * tileW) / 2) + originX) + (tileW / 2) - (sizeX / 2) + speedX;
  // var offY = (((posY * tileH) / 2) - ((posX * tileH) / 2) + originY) - (sizeY) + (tileH / 2) + speedY;

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
};

function animateMove(){

  if(keys.up){
    console.log(keys.up);
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

  drawGame(map);
  window.requestAnimationFrame(function(){
    animateMove();
  });
}

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