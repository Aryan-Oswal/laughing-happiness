class Division{
    constructor(x) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, 780, 10, 600, options);
        this.width = 10;
        this.height = 600;
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER)
        fill('cyan')
        rect(this.body.position.x, this.body.position.y , this.width , this.height);
      }
}