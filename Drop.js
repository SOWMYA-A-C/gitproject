class Drop{
    constructor(x,y){
        this.xPosition=x;
        this.yPosition=y;
        this.radiusX=random(3,20);
        this.radiusX=4;
        this.radiusY=random(10,20);
    }

    display(){
        fill(random(0,255),random(0,255),random(180,255))
        ellipse(this.xPosition,this.yPosition,this.radiusX,this.radiusY);
    }

    fall(){
        //this.yPosition=this.yPosition+random(10,30)
        this.yPosition=this.yPosition+10

        if(this.yPosition>=height){
           // this.yPosition=random(0,100);
           this.yPosition=0
        }
    
    }
    
}



// class Drop{
//     constructor(x,y) {
      
//         this.radiusY=Math.round(random(3,10));
        
//         this.radiusX=2;
//         this.radiusY=8;
        
       
//         this.body = Bodies.circle(x,y,this.radiusX,this.radiusY);
       
       
       
//         World.add(world, this.body);
//       }
//       display(){
//         Engine.update(engine);
//         fill(random(0,255),random(0,255),random(180,255))
//         ellipseMode(RADIUS);
//         ellipse( this.body.position.x, this.body.position.y, this.radiusX, this.radiusY);
   
//         console.log(this.body.position.y)
        
//       }
      

      
// }