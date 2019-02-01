var food;
var speed = 10;

function setup() {    
    createCanvas(400, 400);
    serpiente = new Serpiente();
    cuerpo = new Cuerpo();
    frameRate(5);
    pickLocation();
}

function pickLocation(){
    var cols=floor(width/10);
    var rows=floor(height/10);   
    food=createVector(floor(random(cols)) * 10, floor(random(rows)) * 10);    
}

function draw() {
    background(51);
    serpiente.update();
    serpiente.draw( serpiente.x, serpiente.y);

    fill(255, 0, 100);
    rect(food.x,food.y, 10, 10);

    cuerpo.update(); 
    cuerpo.draw();

    update();
}

function update() {
    if(serpiente.x == food.x && serpiente.y == food.y){
        cuerpo.add();
        pickLocation();
    }
}

function keyPressed() {
    switch (keyCode) {
    case DOWN_ARROW:
        serpiente.dir(0, speed);
        break;
    case UP_ARROW:
        serpiente.dir(0, -speed);
        break;
    case RIGHT_ARROW:
        serpiente.dir(speed, 0);
        break;
    case LEFT_ARROW:
        serpiente.dir(-speed, 0);
        break;
    case 77:
        //letra m. eliminar y llevar contenido a la funcion que detecta si la serpiente esta sobre la comida
	    cuerpo.add();
        break;
    }
}

function mousePressed() {

}

function drawRectangle ( drawx, drawy ) {
    fill(255);
    rect(drawx, drawy, 10, 10);
}
