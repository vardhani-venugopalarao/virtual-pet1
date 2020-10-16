//Create variables here
var dog,happyDog,database,foodS,foodStock;
var database;

function preload()
{
  //load images here
  image1=loadImage("Dog.png");
  image2=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(300,300);
  dog.addImage("dogImg",image1);
  foodS=0;
 

  foodStock=database.ref('Food');
  foodStock.on("value",readStocks);
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    dog.addImage("dogImg",image2);
    foodS--;
    if(foodS < 0)
        foodS = 0;
    writeStock(foodS);
    
  }


  drawSprites();
  //add styles here
  textSize(20);
  fill("black");
  text("Food remaining:" + foodS, 100,50);
}

function readStocks(data){
  foodS=data.val();
}

function writeStock(x)
{
 
  database.ref('/').update({
    Food:x
  })
}


