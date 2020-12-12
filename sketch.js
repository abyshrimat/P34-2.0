//Create variables here
var dog,dogImg,happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  }


function draw() {  
  background(46, 139, 87)
  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  }
  drawSprites();
  stroke("black");
  fill("red");
text("food remaining" + foodS, 100, 100);
text("Press UP_ARROW key to feed dog" ,130, 50);

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0
  }
  else{
    x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}





