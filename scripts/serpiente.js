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
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    }

    this.draw = function ( drawx, drawy ) {
        fill(255);
        rect(drawx, drawy, 10, 10);
    }

}
