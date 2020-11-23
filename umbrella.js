class Umbrella {
    constructor(x, y) {
      var options = {
          "isStatic":true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.radius = 300;
      this.body = Bodies.circle(x, y, 300, options);
      this.body

      this.image = loadImage("walking_1.png");
      //this.body.setCollider('circle',0,0,350);
      World.add(world, this.body);
    }
    display(){ 
      var pos =this.body.position; 
      push(); 
      translate(pos.x, pos.y); 
      rectMode(CENTER); 
      fill("magenta"); 
      //ellipse(0, 0, this.radius, this.radius); 
      imageMode(CENTER); 
      image(this.image, 0,0,300,300) ;
      this.image.scale = 0.5;
      pop(); 
    } 
  };
  