var food;
var speed = 10;
var score = 0;
var lastDir = "";
var lastPressed = "";

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
    
    cuerpo.death(); 
    cuerpo.update(); 
    cuerpo.draw();
	lastDir = lastPressed;
    update();
}

function update() {
    if(serpiente.x == food.x && serpiente.y == food.y){
        cuerpo.add();
	score++;
        pickLocation();
    }
    document.getElementById("score").innerHTML = score;
}

function keyPressed() {
    switch (keyCode) {
    case DOWN_ARROW:
	if ((lastDir != "up") || (score == 0)) {
	    lastPressed = "down";
            serpiente.dir(0, speed);
	}
        break;
    case UP_ARROW:
	if ((lastDir != "down") || (score == 0)) {
	    lastPressed = "up";
	    serpiente.dir(0, -speed);
	}
        break;
	
    case RIGHT_ARROW:
	if ((lastDir != "left") || (score == 0)) {
	    lastPressed = "right";
            serpiente.dir(speed, 0);
	}
	break;
    case LEFT_ARROW:
        if ((lastDir != "right") || (score == 0)) {
	    lastPressed = "left";
	    serpiente.dir(-speed, 0);
	}
        break;
	/* Para propositos de debugging
	   case 77:
	  cuerpo.add();
	  break; */
    }
}

function drawRectangle ( drawx, drawy ) {
    fill(255);
    rect(drawx, drawy, 10, 10);
}
