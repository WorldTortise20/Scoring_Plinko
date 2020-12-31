var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisionHeight=300;
var score =0;
var turn =0;
var particles;
var gs = "play";
var divisions = []; 
var plinkos = [];
var divide = [];
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,jk;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground2 = new Ground(10,400,5,height);
  ground3 = new Ground(790,400,5,height);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 15; j <=width; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var l = 50; l <=width-20; l=l+50) 
    {
    
       plinkos.push(new Plinko(l,175));
    }

     for (var m = 15; m <=width; m=m+50) 
    {
    
       plinkos.push(new Plinko(m,275));
    }

     for (var o = 50; o <=width-10; o=o+50) 
    {
    
       plinkos.push(new Plinko(o,375));
    }

    //sco = random();

    //divide.push([divisions.body.position.x],[divisions.body.position.y]);
    //console.log(divide);
    t = Math.round(random(1,10))*50;
    jk = Math.round(random(1,10))*50;
    w = Math.round(random(1,10))*50;
    n = Math.round(random(1,10))*50;
    x = Math.round(random(1,10))*50;
    p = Math.round(random(1,10))*50;
    q = Math.round(random(1,10))*50;
    r = Math.round(random(1,10))*50;
    s = Math.round(random(1,10))*50;
    u = Math.round(random(1,10))*50;
    v = Math.round(random(1,10))*50;
}
 


function draw() {
  background("black");
  texts();

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   scoring();

   if(gs ==="end"){
    textSize(40)
    fill("yellow");
    text("Finished! Ctrl+R to replay!",100,250);
   }
}//end of draw()



function mousePressed()
{
  if(gs!=="end")
  {
    //turn++;
    particles=new Particle(mouseX,10,10,10);

  }
}

/*function keyPressed()
{
  if(keyCode===32 && gs==="end")
  {
    score=0;
    turn=0;
    gs="play";
  }
}*/

function scoring(){
  
  if (particles!=null){
    particles.display();   
   if(particles.body.position.y>560){
     if(particles.body.position.x>20 && particles.body.position.x<95){
       score = score+t;
       particles = World.remove(world,particles);
       particles = null;
       turn++;
       if(turn===5){
         gs = "end";
         console.log(gs);
       }
     }
   else if(particles.body.position.x>100 && particles.body.position.x<175){
     score = score+jk;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>180 && particles.body.position.x<255){
     score = score+w;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>260 && particles.body.position.x<335){
     score = score+n;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>340 && particles.body.position.x<415){
     score = score+x;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>420 && particles.body.position.x<495){
     score = score+p;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>500 && particles.body.position.x<575){
     score = score+q;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>580 && particles.body.position.x<635){
     score = score+r;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>640 && particles.body.position.x<715){
     score = score+s;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
   else if(particles.body.position.x>720 && particles.body.position.x<795){
     score = score+u;
     particles = World.remove(world,particles);
     particles = null;
     turn++;
     if(turn===5){
       gs = "end";
       console.log(gs);
     }
   }
 }//body pos 750 if ends here
}//end of particles if
}

function texts(){
  textSize(20)
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("Score : "+score,20,30);
  text("Turns completed: "+turn,620,30);
  fill("red");
  a = text(""+t,20,550);
  fill("lightblue");
  b = text(""+jk,100,550);
  fill("green");
  c = text(""+w,180,550);
  fill("yellow");
  d = text(""+n,260,550);
  fill("white");
  e = text(""+x,340,550);
  fill("grey");
  f = text(""+p,420,550);
  fill("orange");
  g = text(""+q,500,550);
  fill("brown");
  h = text(""+r,580,550);
  fill("purple");
  y = text(""+s,660,550);
  fill("pink");
  z = text(""+u,740,550);
}