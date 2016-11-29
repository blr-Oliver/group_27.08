Ball.prototype = {
	nextPosition: function(acceleration, dt){
		this.speed.x=this.speed.x + acceleration.x * dt;
		this.speed.y=this.speed.y + acceleration.y * dt;

		this.position.x = this.position.x + this.speed.x * dt;
		this.position.y = this.position.y + this.speed.y * dt;
		this.handleCollisions();
	},
	handleCollisions: function(){
			if (this.position.x > 100){
				this.position.x = this.position.x - (this.position.x - 100);
				this.speed.x = -this.speed.x;
			};
			if (this.position.x < 0){
				this.position.x = this.position.x - (0 - this.position.x);
				this.speed.y = -this.speed.y;
			};
	
			if (this.position.y > 100){
				this.position.y = this.position.y - (this.position.y - 100);
				this.speed.x = -this.speed.x;
			};
			if (this.position.y < 0){
					this.position.y = this.position.y - (0 - this.position.y);
					this.speed.y = -this.speed.y;
			};
		}
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

