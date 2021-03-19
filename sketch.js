var cat, mouse;
var catImage, mouseImage; 
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catSitting = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImg3 = loadImage("images/cat4.png");
    mouseImage = loadAnimation ("images/mouse1.png", "images/mouse2.png", "images/mouse3.png")

}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800, 700, 30, 30);
    cat.addImage("cat1", catSitting);
    cat.scale = 0.2;

    mouse = createSprite(100, 670, 30, 30);
    mouse.addAnimation("mouse1", mouseImage );
    mouse.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    fill("white")
    text(mouseX + "," +mouseY,50,50)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        
    }

}
