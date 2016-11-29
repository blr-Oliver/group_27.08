function Ball(m) {
	this.weight = m;

	this.position ={
		x: 50,
		y: 50
	};
	this.speed ={
		x: 0,
		y: 0
	};
	this.acceleration{
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
