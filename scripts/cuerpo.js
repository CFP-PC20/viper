function Cuerpo() {
    this.content = [];

    this.add = function () {
	this.content.push([serpiente.x, serpiente.y]);
	console.log(this.content);
    }

    this.draw = function () {
	this.content.forEach(forEachDraw);

	function forEachDraw (item) {
	    drawRectangle(item[0], item[1], 10, 10);
	}
	}
	
	this.death=function(){
        for (var i=0;i<this.content.length;i++){
            var pos=this.content[i];
                if ((pos[0]==serpiente.x) && (pos[1]==serpiente.y)){
                this.content=[];
            }
        }
    }

    this.update = function () {
	this.content.shift();
	this.content.push([serpiente.x, serpiente.y]);
    }
    
}

