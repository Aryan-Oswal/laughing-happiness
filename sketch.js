const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;
var divHeight = 300;
var divisions = [] ;
var particles = []
var balls = []
var score = 0 ;
var count = 0;
var GameState = 0
var particle;
function setup() {
  createCanvas(480,800);
  

  engine = Engine.create();
    world = engine.world;
    
    for(var k = 0 ; k <= width ; k = k + 80) {
      divisions.push(new Division(k))
    }

    for(var k = 40 ; k <= width ; k = k + 50) {
      balls.push(new Ball(k ,75))
    }

    for(var k = 15 ; k <= width-10 ; k = k + 50) {
      balls.push(new Ball(k ,175))
    }

    for(var k = 40 ; k <= width ; k = k + 80) {
      balls.push(new Ball(k ,275))
    }

    for(var k = 15 ; k <= width-10 ; k = k + 50) {
      balls.push(new Ball(k ,375))
    }


    

    ground = new BaseClass(240 , 790 , 800 , 10)
}

function draw() {
  //console.log(random(width / 2 -10 , width/2+10))
  background('white')
  
  ground.display()

  for(var k = 0 ; k < divisions.length ; k ++) {
    divisions[k].display()
  }
  Engine.update(engine)


  for(var k = 0 ; k < balls.length ; k ++) {
    balls[k].display()
  }



  // if(frameCount%60 === 0 ) {
  //   particles.push(new Particle(random(width / 2 -10 , width/2+10) , 10 ,10))
  // }

  // for(var k = 0 ; k < particles.length ; k ++) {
  //   particles[k].display()
  // }

  // for(var k = 0 ; k < particles.length ; k ++) {
  //     if(particles[k].x < 300){
  //       score = score + 500
  //     }
  //     if(particles[k].x > 301 && particles[k].x < 600){
  //       score = score + 600
  //     }

  //     if(particles[k].x > 601 && particles[k].x < 600){
  //       score = score + 200
  //     }
  // }
  text(score , 240 , 400)


  if(count === 5){
    GameState = 1;
  }

//   if(particle !== null) {
//     particle.display()

//     if(particle.body.position.y> 760) {
//       if(particle.body.position.x > 601 && particle.body.position.x < 900){
//               score = score + 200
//               particle = null
//               particle = null
//          }

//          if(particle.body.position.x < 300){
//           score = score + 500
//           particle = null

//      }
     

//      if(particle.body.position.x > 301 && particle.body.position.x < 600){
//       score = score + 100
//       particle = null

//  }
//     }
//   }


if(particle != null || particle != undefined) {
  particle.display()

  if(particle.body.position.y> 760) {
    if(particle.body.position.x > 601 && particle.body.position.x < 900){
            score = score + 200
            particle = null
            particle = null
       }

       else if(particle.body.position.x < 300){
        score = score + 500
        particle = null
        particle = null

   }
   

   else if(particle.body.position.x > 301 && particle.body.position.x < 600){
    score = score + 100
    particle = null
    particle = null
    particle = null

}
  }
}


}

function mousePressed() {
  if(GameState !== 1) {
    count++

    particle = new Particle(mouseX , 10,10)
  }

}