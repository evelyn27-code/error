class Waste{
    constructor(x,y,r){
    var options= {
        isStatic : false,
        'restitution':0.3,
        'friction':1,
        'density': 1.2
    
    }
    
    this.x = x;
    this.y=y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);

    World.add(world,this.body);
}

  
   display() {
    var pos = this.body.position;
   
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("blue");
   ellipse(0,0,this.r,this.r);
   pop()
    //Matter.Bodies.circle(this.x, this.y,2);

   }
}