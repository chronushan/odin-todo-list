import Todo from "./todo_DOM.js";

export default function localStorageSave(value) {
	let arr = JSON.parse(localStorage.getItem("Todo"));
	if (!arr) {
		arr = [];
	} else {
		arr.push(value);
		localStorage.setItem(key, JSON.stringify(arr));
	}
}

// function localStorageSave(todoDom) {
// 	const newTodo = new Todo();
// }
