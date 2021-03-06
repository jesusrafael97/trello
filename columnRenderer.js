function renderColumn(data , container) {
	
	//Elements creation

	let columnDivCol = document.createElement("div");
	let columnDivH = document.createElement("div");
	let columnDivS = document.createElement("div");
	let columnDivC = document.createElement("div");
	let columnDivA = document.createElement("a");
	let columnDivI = document.createElement("i");
	let columnH5   = document.createElement("h5");
	let columnBr   = document.createElement("br");
	let cardDivCo = document.createElement("div");
	let columnDivAc = document.createElement("div");
	let columnLink = document.createElement("a");
	let cardContainer = document.createElement("div");

	//attributes assigment
	cardContainer.className = "collection";
	columnDivCol.className = "col-s4-m4";
	columnDivH.className = "card horizontal";
	columnDivS.className = "card-stacked";
	columnDivC.className = "card-content";
	columnDivA.className = "";
	columnDivAc.className = "card-action";
	columnLink.className = "teal-text";
	columnDivI.className = "material-icons right";
	columnDivA.href = "#";


	//appending

	columnDivCol.appendChild(columnDivH);
	columnDivH.appendChild(columnDivS);
	columnDivS.appendChild(columnDivC);
	columnDivS.appendChild(columnDivAc);
	columnDivC.appendChild(columnDivA);
	columnDivA.appendChild(columnDivI);
	columnDivI.appendChild(document.createTextNode("more_vert"));
	columnDivC.appendChild(columnH5);
	columnH5.appendChild(document.createTextNode("Estas son tus tarjetas"));
	columnDivC.appendChild(columnBr);
	columnDivC.appendChild(cardDivCo);
	for (var i = 0; i < 2; i++) {
		renderCard({}, cardContainer);
	}
	columnDivC.appendChild(cardContainer);
	columnDivAc.appendChild(columnLink);
	columnLink.appendChild(document.createTextNode("Agregar tarjeta"));
	container.appendChild(columnDivCol);


}

function renderCard(data , container){

	let card = document.createElement("a");
	card.href = "#";
	card.className = "collection-item";
	card.appendChild(document.createTextNode("Prueba"));
	container.appendChild(card);
}

