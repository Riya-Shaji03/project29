class Polygon{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            density:10
        }
        this.body = Bodies.circle(x,y,20,[options]);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("white");
        imageMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
    }
};