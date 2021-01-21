var dog,happyDog,database,food,foodStock,dogSprite,foodS;

function preload()
{
  dog=loadImage("images/dog.png");
  happyDog=loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  
  dogSprite=createSprite(250,250,20,20);
  dogSprite.addImage(dog);
  dogSprite.scale=0.4;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);
  if(keyDown("space")){
    writeStock(foodS);
   dogSprite.addImage(happyDog);
  }
  drawSprites();
  textSize(20);
  text("Note:Press UP_ARROW KEY to feed drago milk");
  fill(17,25,50);
  stroke();
} 

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}