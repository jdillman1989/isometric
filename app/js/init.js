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
