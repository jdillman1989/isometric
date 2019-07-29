// Canvas Element
var saveCanvas = null;

// Canvas Draw
var saveCTX = null;

// Static Globals
var tileW = 24,
    tileH = tileW / 2,
    mapW = 5,
    mapH = 5,
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

var mapMulti = [
  [
    2,1,1,2,2, // top corner
    2,1,1,1,2,
    2,1,1,1,2,
    2,1,1,1,2,
    2,2,1,2,2
  ],
  [
    0,1,1,0,0, // top corner
    0,1,1,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0
  ],
  [
    0,1,1,0,0, // top corner
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0
  ]
];

var mapSingle = [
  [2,0,0], [2,1,1], [2,1,1], [2,0,0], [2,0,1], // top corner

  [2,0,0], [2,1,0], [2,1,0], [2,1,0], [2,0,0],

  [2,0,0], [2,1,0], [2,0,0], [2,1,0], [2,0,0],

  [2,0,0], [2,1,0], [2,1,0], [2,1,0], [2,0,0],

  [2,0,0], [2,0,0], [2,0,0], [2,0,0], [2,0,0]
];

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

    // drawGameMulti(mapMulti);
    drawGameSingle(mapSingle);
  });

  // drawGameMulti(mapMulti);
  drawGameSingle(mapSingle);
};

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

function drawGameSingle(map){
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

function drawPlayer(x, y) {

}
