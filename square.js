class Square
{
constructor(x,y,height,width)
{
    var option = 
    {
      isStatic:false,
      friction:1
    }

    this.height = height;
    this.width = width;
    this.body = Bodies.rectangle(x,y,width,height,option)
    World.add(world, this.body);
  }
    display()
    {
            var pos = this.body.position;
            var angle = this.body.angle;
            
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            ellipseMode(CENTER)    
            ellipse(0,0,this.width,this.height)
           // ellipse(0,0,this.r,this.r)
            pop()
    }

}