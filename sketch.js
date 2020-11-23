const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 

var rain = 100;
var batMan;
var drops = [];
var thunder, thunder1, thunder2, thunder3, thunder4;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");


    
}

function setup(){
    createCanvas(400,655);
    engine = Engine.create(); 
    world = engine.world;
    
    batMan = new Umbrella(200, 520);
    batMan.debug =true;
    batMan.scale = 2;
    //batMan.setCollider(0,0,350);

    for(var i=0; i<rain; i++){
        drops.push(new Drop(random(0, 400), random(0,400)))
    }
      
}

function draw(){
    background(0);
    Engine.update(engine);
    batMan.display();
    
        for (var i = 0; i < drops.length; i++) {
     
            drops[i].display();
        
    }
    // updateDrop();

    if(frameCount % 60 === 0 && frameCount % 72 ==! 0){
        thunder = createSprite(200, 50, 10, 10);
        var rand = Math.round(random(1,2,3,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
                    break;
            case 2: thunder.addImage(thunder1);
                    break;
            case 3: thunder.addImage(thunder1);
                    break;
            case 4: thunder.addImage(thunder1);
                    break;
            default: break;
        }
    }
    drawSprites();
      
}   

/*function updateDrop(){
    if(this.drops.position.y> height){
        Matter.body.setPosition(this.body, {x: random(0, 400), y: random(0,400)})
    }
}*/

