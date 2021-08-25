var retFixo,retMovendo;


function setup() {
  createCanvas(1200,800);
 retFixo=createSprite(600, 400, 50, 80);
 retFixo.shapeColor="green";
 retFixo.debug=true;
 retMovendo=createSprite(600, 200, 50, 80);
 retMovendo.shapeColor="green";
 retMovendo.debug=true;
}

function draw() {
  background(0,0,0); 
  
  retMovendo.x=World.mouseX;
  retMovendo.y=World.mouseY;

  if (retMovendo.x-retFixo.x<retFixo.width/2+retMovendo.width/2 &&
    retFixo.x-retMovendo.x<retFixo.width/2+retMovendo.width/2 && 
    retMovendo.y-retFixo.y<retFixo.height/2+retMovendo.height/2 && 
    retFixo.y-retMovendo.y<retFixo.height/2+retMovendo.height/2){
retMovendo.shapeColor="red";
retFixo.shapeColo="red";
      
    }
    else{
      retMovendo.shapeColor="green";
retFixo.shapeColo="green";
    }
  drawSprites();
}