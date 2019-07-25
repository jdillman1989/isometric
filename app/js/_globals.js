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

var map = [
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
