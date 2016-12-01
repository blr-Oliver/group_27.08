function Ball(m) {
	this.weight = m;

	this.position = {
		x: 50,
		y: 50
	};

	this.speed = {
		x: 0.02,
		y: 0
	};
}

Ball.prototype = {
	nextPosition: function(acceleration, dt){
		this.speed.x = this.speed.x + acceleration.x * dt;
		this.speed.y = this.speed.y + acceleration.y * dt;

		this.position.x = this.position.x + this.speed.x * dt;
		this.position.y = this.position.y + this.speed.y * dt;
		this.handleCollisions();
	},
	handleCollisions: function(){
			var attenuation = 0.02;
			if (this.position.x > 100){
				this.position.x = 100 - (this.position.x - 100);
				this.speed.x = -(this.speed.x - attenuation);
			};
			if (this.position.x < 0){
				this.position.x = -this.position.x;
				this.speed.x = -(this.speed.x + attenuation);
			};
	
			if (this.position.y > 100){
				this.position.y = 100 - (this.position.y - 100);
				this.speed.y = -(this.speed.y - attenuation);
			};
			if (this.position.y < 0){
				this.position.y = -this.position.y;
				this.speed.y = - (this.speed.y + attenuation);
			};
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
	computeAcceleration: function(ball) {
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
	this.ball = new Ball(1);
	this.banjee = new Banjee(0.00000005, 20, 10);

	this.root.on('mousemove', this.updateMouse.bind(this));
	this.lastFrame = performance.now();
	var self = this;
	requestAnimationFrame(function frameDrawer(time){
		self.render(time);
		requestAnimationFrame(frameDrawer);
	});
}

Playground.prototype = {
	renderBall: function(){
		$(".ball").css("left", this.ball.position.x + "%");
    	$(".ball").css("top", this.ball.position.y + "%");
	},
	renderBanjee: function(){
		var rx = this.banjee.position.x - this.ball.position.x;
		var ry = this.banjee.position.y - this.ball.position.y;
		var hypot = Math.hypot(rx, ry);
		var alfa = Math.atan2(ry, rx);
		var height = Math.min(this.banjee.material/hypot, 0.5);

		$('#band').css({
			'width':hypot + "%",
			'height': height + '%',
			'left':this.ball.position.x + '%',
			'top':this.ball.position.y + '%',
			'margin-top': -height/2 + '%',
			'transform': 'rotate(' + alfa + 'rad)'
		});
	},
	updateMouse: function(event){
		this.banjee.position.x = event.offsetX / this.root.width() * 100;
		this.banjee.position.y = event.offsetY / this.root.height() * 100;
	},
	render: function(time){
		const G = 1e-5;
		var dt = time - this.lastFrame;
		var acceleration = this.banjee.computeAcceleration(this.ball);
		acceleration.y += G;
		this.ball.nextPosition(acceleration, dt);
		this.renderBall();
		this.renderBanjee();
		this.lastFrame = time;
	}
}

$(document).ready(function(){
	new Playground('.wrap');
})
