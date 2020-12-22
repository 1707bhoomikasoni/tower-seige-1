class Block{
    constructor(x,y,width,height){
        var boxOptions={
       isStatic:false
        }
    this.body=Bodies.rectangle(x,y,width,height,boxOptions)
   this.w=width
   this.h=height
    World.add(world,this.body)
    }
display(){
    rectMode(CENTER)
    fill("pink")
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}
}