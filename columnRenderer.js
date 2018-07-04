function renderColumn(data , container) {
	
	//Elements creation

	let columnDivCol = document.createElement("div");
	let columnDivH = document.createElement("div");
	let columnDivS = document.createElement("div");
	let columnDivC = document.createElement("div");
	let columnH5   = document.createElement("h5");
	let columnBr   = document.createElement("br");
	let cardDivCo = document.createElement("div");
	let columnDivAc = document.createElement("div");
	let columnLink = document.createElement("a");

	//attributes assigment
	columnDivCol.className = "col s4 m4";
	columnDivH.className = "card horizontal";
	columnDivS.className = "card-stacked";
	columnDivC.className = "card-content";
	columnDivAc.className = "card-action";
	columnLink.className = "teal-text";


	//appending

	columnDivCol.appendChild(columnDivH);
	columnDivH.appendChild(columnDivS);
	columnDivS.appendChild(columnDivC);
	columnDivS.appendChild(columnDivAc);
	columnDivC.appendChild(columnH5);
	columnH5.appendChild(document.createTextNode("Estas son tus tarjetas"));
	columnDivC.appendChild(columnBr);
	columnDivC.appendChild(cardDivCo);
	container.appendChild(columnDivCol);
	columnDivAc.appendChild(columnLink);
	columnLink.appendChild(document.createTextNode("Agregar tarjeta"));

}

function renderCard(data , container){

	let cardA1 = document.createElement("a");
	
}

