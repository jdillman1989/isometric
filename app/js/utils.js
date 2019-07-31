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