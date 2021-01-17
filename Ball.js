class Ball {
    
    constructor(x,y){
        var options = {
            isStatic: true,
            
           
	}
        this.body = Bodies.circle(x, y, 8, options)
        this.radius = 8
        World.add(world , this.body)
    }
    display() {
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill('hotpink')
        ellipse(this.body.position.x , this.body.position.y , this.radius , this.radius)
    }
}