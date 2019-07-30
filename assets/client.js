// Canvas Element
var saveCanvas = null;

// Canvas Draw
var saveCTX = null;

// Static Globals
var tileW = 20,
    tileH = tileW / 2,
    mapW = 10,
    mapH = 10,
    originX = 0,
    originY = 72,
    layerDepth = 5;

// Colors
var greens = [
  '#2F5',
  '#6E6',
  '#3D9'
];

var tileIndex = 0;

var selectedTileX = -1,
    selectedTileY = -1;

var tiles = {
  grass: {
    base: '#2F5',
    depth: '#0B1'
  },
  water: {
    base: '#88F',
    depth: '#44B'
  },
  rock: {
    base: '#A77',
    depth: '#755'
  },
  lava: {
    base: '#F33',
    depth: '#B00'
  }
}

var r = '#F00';
var d = '#B00';
var b = '#0B1';

var player = [
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
  b,d,d,d,d,d,d,d,d,b,
  b,b,d,d,d,d,d,d,b,b,
  0,0,b,b,d,d,b,b,0,0,
  0,0,0,0,b,b,0,0,0,0,
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
      sprite: player
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
      sprite: player
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

function drawGame(map){
  saveCTX.clearRect(0, 0, saveCanvas.width, saveCanvas.height);

  var layer = originY;

  for(var i = 0; i < map[0].length; ++i){

    for(var x = (mapW - 1); x >= 0; x--) {
      for(var y = 0; y < mapH; y++) {

        var currentPos = ((y*mapW)+x);

        if(map[currentPos][i]){

          if( x == selectedTileX && y == selectedTileY){
            // highlight selected tile
          }

          drawTile(x, y, map[currentPos][i].tile, layer);
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

  // Draw tile depth
  saveCTX.fillStyle = color.depth;
  saveCTX.strokeStyle = color.depth;
  saveCTX.beginPath();
  saveCTX.lineWidth = 0.1;
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
  saveCTX.lineWidth = 0.1;
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

      console.log('x: ' + x + ', y: ' + y);

      if(thisSprite[k]){
        thisCTX.fillStyle = thisSprite[k];
        thisCTX.fillRect(x, y, 1, 1);
      }
      k++;
    }
  }
}
