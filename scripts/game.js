function setup() {
    createCanvas(600, 600);
    serpiente = new Serpiente();
    cuerpo = new Cuerpo();
    frameRate(10);
}


function draw() {
    background(51);
    serpiente.update();
    serpiente.draw( serpiente.x, serpiente.y);

    cuerpo.update(); 
    cuerpo.draw();
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
