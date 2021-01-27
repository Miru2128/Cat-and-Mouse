var ground, groundImg;
var cat, catImg;
var mouse, mouseImg;


function preload() {
    groundImg = loadImage("garden.png");
    catImg = loadImage("cat2.png");
    mouseImg = loadImage("mouse1.png");
    
}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(500,400,10,20);
    ground.addImage(groundImg);

    cat = createSprite(300,300,50,50);
    cat.addImage(catImg);

    mouse = createSprite(700,300,50,50);
    mouse.addImage(mouseImg)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
