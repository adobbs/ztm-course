var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", toggleTodoItem);
	ul.appendChild(li);

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("delete");
	button.addEventListener("click", deleteListItem);
	// ul.insertBefore(button, li.nextSibling);
	li.appendChild(button);

	items = ul.children;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Start exercise solutions

// For exercise, need to add event listeners and
// then update each time a list item is added

var items = Array.from(ul.children);

items.forEach(function (el){
	el.addEventListener("click", toggleTodoItem);
});

function toggleTodoItem(e) {
	e.target.classList.toggle("done");
}

var deleteButtons = Array.from(document.querySelectorAll(".delete"));

deleteButtons.forEach(function (el){
	el.addEventListener("click", deleteListItem);
});

function deleteListItem(e) {
	e.target.parentElement.remove();
}