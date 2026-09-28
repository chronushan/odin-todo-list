import Todo from "./todo_DOM.js";

export default function localStorageSave(value) {
	let arr = JSON.parse(localStorage.getItem("Todo"));
	if (!arr) {
		arr = [];
	}
	value.id = arr.length + 1;
	arr.push(value);
	localStorage.setItem("Todo", JSON.stringify(arr));
}
