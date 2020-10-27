
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite (80,315,20,20);
monkey.addAnimation ("moving",monkey_running);
monkey.scale = 0.1
  
ground = createSprite (400,350,900,10);
ground.velocityX=-4
ground.x=ground.width/2
console.log(ground.x)
  
FoodGroup = createGroup();
obstacleGroup = createGroup();
  
}


function draw() {
background(255)
text(mouseX + "," + mouseY, mouseX, mouseY)
stroke ("black")
fill ("black")
textSize (20)
survivalTime= Math.ceil(frameCount/frameRate())
text ("survivalTime :" + survivalTime,105,50)
  
if (ground.x<0){
 ground.x=ground.width/2  
} 
  
   if (monkey.isTouching (obstacleGroup)){
   obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
     
 }
  
  if (monkey.isTouching(FoodGroup)){
     survivalTime = survivalTime + 1
     FoodGroup.destroyEach ();
  }
  
if(keyDown("space")&& monkey.y >= 261 ) {
 monkey.velocityY = -14;
}
  
monkey.velocityY = monkey.velocityY + 0.8; 
  
monkey.collide (ground);
   
  
spawnbanana();  
  
spawnobstacle();
  
drawSprites ();
  
}

function spawnbanana (){
  if(frameCount % 80 === 0){
    var banana = createSprite (600,150,40,10);
    banana.y = Math.round(random(80,180));
    banana.addImage (bananaImage);
    banana.velocityX= -12;
    banana.scale = 0.1;
    banana.lifetime = -74
    
     FoodGroup.add (banana);
  }
}

function spawnobstacle (){
  if(frameCount % 300 === 0){
    var obstacle = createSprite (600,150,40,10);
    obstacle.y = 305 ;
    obstacle.addImage (obstacleImage);
    obstacle.velocityX= -8;
    obstacle.scale = 0.2;
    obstacle.lifetime = -85;
    
     obstacleGroup.add (obstacle);
  }
}


