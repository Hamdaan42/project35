var balloon, position , database;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("Hot Air Ballon-01.png")
    this.image  = loadImage("Hot Air Ballon-02.png")
}

function setup() {
  database=firebase.database
  createCanvas(800,400);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(this.image)
  var positionpath = database.ref('ballon')
    positionpath.on("value",readposition,showerror)

}

function draw() {
  background(255,255,255);  
  background(backgroundImg);
if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
  drawSprites();
}

function changePosition(x,y){
   database.ref('ballon').set({
       'x':position.x+x,
       'y':position.y+y
   })
}
function readposition(data){
position=data.val()
ball.x=position.x
ball.y=position.y

}

function showerror(){
console.log("error in data base ");

}