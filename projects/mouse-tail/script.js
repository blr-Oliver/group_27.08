//
function createSegment(x, y){
	var displayObject = document.getElementById("display");
	var segment = document.createElement("div");
	segment.classList.add("segment");
	segment.style.left = x;
	segment.style.top = y;
	displayObject.appendChild(segment);
	return segment;
}
