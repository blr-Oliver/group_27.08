//
function createSegment(x, y){
	var displayObject = document.getElementById("display");
	var segment = document.createElement("div");
	segment.classList.add("segment");
	segment.style.left = x + "px";
	segment.style.top = y + "px";
	displayObject.appendChild(segment);
	return segment;
}
