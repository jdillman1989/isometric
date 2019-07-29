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
  [2,0,0,0], // left corner
  [2,1,1,0],
  [2,1,1,0],
  [2,0,0,0],
  [2,0,1,0], // top corner

  [2,0,0,0],
  [2,1,0,0],
  [2,1,0,0],
  [2,1,0,0],
  [2,0,0,0],

  [2,0,0,0],
  [2,1,3,0],
  [2,0,0,0],
  [2,1,0,0],
  [2,0,0,0],

  [2,0,0,0],
  [2,1,0,0],
  [2,1,0,0],
  [2,1,0,0],
  [2,0,0,0],

  [2,0,0,0], // bottom corner [2,0,0,0],
  [2,0,0,0],
  [2,0,0,0],
  [2,0,0,0],
  [2,0,0,0] // right corner
];

var tiles = {
  grass: {
    base: '',
    depth: ''
  },
  water: {
    base: '',
    depth: ''
  }
  rock: {
    base: '',
    depth: ''
  }
  lava: {
    base: '',
    depth: ''
  }
}

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
  ],
],
