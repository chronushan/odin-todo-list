import Todo from "./todo_DOM.js";

export default function localStorageSave(value) {
	let arr = JSON.parse(localStorage.getItem("Todo"));
	if (!arr) {
		arr = [];
	}
	value.id = localStorage.length;
	arr.push(value);
	localStorage.setItem("Todo", JSON.stringify(arr));
}
