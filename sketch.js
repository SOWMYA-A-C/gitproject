 var rain=[],drop,rain1=[];

function setup() {
  createCanvas(1600,800);
  
  for(var i=0; i<500; i++){
    drop=new Drop(random(0,1600),random(0,800))
    rain.push(drop);
  }

//rain= new Drop()
 }

function draw() {
  background(0);

  for(var i=0; i<rain.length;i++){
    rain[i].display();
    rain[i].fall();
  }
  //rain.display();
  
}



// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
// var engine,world

// function setup() {
//   createCanvas(1600,800);
//   engine = Engine.create();
//   world = engine.world;



//  }

// function draw() {
//   background(0);
  
//   //console.log(rain.length)

// for(i=0;i<1000;i++){
// rain=new Drop(Math.round(random(1,1600)),Math.round(random(1,400)))
// rain.display();
// //delayTime(100)
// }
    
  
// }