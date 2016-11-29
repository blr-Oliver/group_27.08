function Ball(m) {
	this.weight = m;

	this.position = {
		x: 50,
		y: 50
	};
	this.speed = {
		x: 0,
		y: 0
	};
	this.acceleration = {
		x: 0,
		y: 0
	};

	var curPos = this.position;
	var curSpeed = this.speed;
	}

Ball.prototype = {
	nextPosition: function(acceleration, dt){
		this.speed.x=curSpeed.x + acceleration.x * dt;
		this.speed.y=curSpeed.y + acceleration.y * dt;

		this.position.x=curPos.x + this.speed.x * dt;
		this.position.y=curPos.y + this.speed.y * dt;
	}
}

function Playground(root) {
	this.root = $(root);
	this.ball = new Ball(100);
	this.banjee = new Banjee(1, 100, 1000);

	this.root.on('mousemove', this.updateMouse.bind(this));
}

Playground.prototype = {
	renderBall: function(){},
	renderBanjee: function(){},
	updateMouse: function(event){}
}

//Изменение координат шарика!
window.requestAnimationFrame(renderBall());

function renderBall(){
    $(".ball").css("left", this.ball.position.x + "%");
    $(".ball").css("top", this.ball.position.y + "%");
};
//Конец изменения координат шарика

