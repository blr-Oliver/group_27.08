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
}

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

function Banjee(k, l, material) {
	this.k = k;
	this.position = {
		x: 50,
		y: 50
	};
	this.l = l;
	this.material = material;
}

Banjee.prototype = {
	completeAcceleration: function(ball) {
		var acceleration ;
		var newL = Math.hypot(this.position.x - ball.position.x, this.position.y - ball.position.y);
		if( this.l >= newL) {
			return {
				x: 0,
				y: 0
			}
		} else {
			acceleration = this.k * (newL - this.l) * (newL - this.l) / (2 * ball.weight);
			var direction = {
				x: this.position.x - ball.position.x,
				y: this.position.y - ball.position.y
			}
			direction.x *= acceleration / newL;
			direction.y *= acceleration / newL;

			return direction;
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
	renderBanjee: function(){
		var hypot = Math.hypot((this.ball.position.y-this.banjee.position.y),(this.banjee.position.x-this.ball.position.x));
		var alfa = Math.atan((this.ball.position.y-this.banjee.position.y),(this.banjee.position.x-this.ball.position.x));
		if(alfa < 0){
			alfa= alfa+Math.PI;
		}
		$('#band').css({
			'width':hypot,
			'height':this.banjee.material/hypot,
			'left':this.ball.position.x + '%',
			'top':this.ball.position.y + '%',
			'margin-top': (this.banjee.material/hypot)/2,
			'transform':'rotate('+ -alfa+'rad)'
		});
	},
	updateMouse: function(event){}
}

//Изменение координат шарика!
window.requestAnimationFrame(renderBall());

function renderBall(){
    $(".ball").css("left", this.ball.position.x + "%");
    $(".ball").css("top", this.ball.position.y + "%");
};
//Конец изменения координат шарика

