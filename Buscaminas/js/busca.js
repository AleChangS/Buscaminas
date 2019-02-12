function creat(){
	for (var i=0; i<8; i++) {
		for (var j=0; j<8; j++) {
			var div = document.createElement("div");
			div.id = i + "" + j;
			div.addEventListener("click",mosNum,true);
			tablerominas.appendChild(div);
		}
	}
}
var minas = inima();
function inima(){
	var tabla = [];
	for (var i=0; i<8; i++) {

	}
}