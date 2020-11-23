class Drop { 
    constructor(x, y) { 
      var options = { 
        "isStatic":false, 
        'restitution':0.3, 
        'friction':0.1, 
        'density':0.8 
      } 
      this.x = x; 
      this.y = y; 
      this.radius = 10; 
      this.body = Bodies.circle(x, y, 10, options); 
      World.add(world, this.body); 
    } 
    updateDrop(){
        if(this.body.position.y> height){
            Matter.body.setPosition(this.body, {x: random(0, 400), y: random(0,400)})
        }
    }
    
    display(){ 
      var pos =this.body.position; 
      push(); 
      translate(pos.x, pos.y); 
      rectMode(CENTER) 
      fill("blue"); 
      ellipse(0, 0, this.radius, this.radius); 
      pop(); 
    } 
  };