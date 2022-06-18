var enterButton = document.getElementById("enter");
var input = document.getElementById("descricao");
var ul = document.querySelector("#metas");
var item = document.getElementsByTagName("list");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var list = document.createElement("list");
	list.appendChild(document.createTextNode(input.value));
	ul.appendChild(list);
	input.value = ""; 

	function crossOut() {
		list.classList.toggle("done");
	}

	list.addEventListener("click",crossOut);

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	list.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		list.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
	} 
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);