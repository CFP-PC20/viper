function Serpiente() {
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.x = 0;
    this.y = 0

    this.dir = function (x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    this.update = function () {
        if (this.x<0){
            this.x=width;
        }else if (this.x>width){
            this.x=0;
        }
        if (this.y<0){
            this.y=height;
        }else if (this.y>height){
            this.y=0;
        }
        
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        console.log("("+ this.x + "," + this.y + ")")

    }

    this.draw = function ( drawx, drawy ) {
        fill(255);
        rect(drawx, drawy, 10, 10);

        
    }

}
