function setup() {
    createCanvas(600, 600);
    serpiente = new Serpiente();
    frameRate(10);
}


function draw() {
    background(51);
    serpiente.update();
    serpiente.draw();
}

function keyPressed() {
    switch (keyCode) {
        case DOWN_ARROW:
            serpiente.dir(0, 10);
            break;
        case UP_ARROW:
            serpiente.dir(0, -10);
            break;
        case RIGHT_ARROW:
            serpiente.dir(10, 0);
            break;
        case LEFT_ARROW:
            serpiente.dir(-10, 0);
            break;
    }
}

function mousePressed() {

}