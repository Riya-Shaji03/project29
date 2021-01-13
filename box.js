class Box {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.5,
            'friction': 0.1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill(this.color)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }
  };