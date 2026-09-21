import localStorageSave from "./localStorage_save.js";
import Todo from "./todo_DOM.js";
import localStorageLoad from "./localStorage_load.js";

export default function newTodoButton() {
	const newTodo = document.querySelector("#new_todo");
	const createTodoForm = document.querySelector("#createTodoForm");
	const TodoClose = document.querySelector("#TodoClose");
	const form = document.querySelector("#createTodoForm form");
	const todoCreateBttn = document.querySelector("#todoCreateBttn");

	const newTitle = document.querySelector("#newTitle");
	const newDescription = document.querySelector("#newDescription");
	const newDueDate = document.querySelector("#newDueDate");
	const newPriority = document.querySelector("#newPriority");

	newTodo.addEventListener("click", (e) => {
		createTodoForm.showModal();
	});

	TodoClose.addEventListener("click", (e) => {
		createTodoForm.close();
	});

	createTodoForm.addEventListener("click", (e) => {
		const rect = createTodoForm.getBoundingClientRect();
		const isInDialog =
			e.clientX >= rect.left &&
			e.clientX <= rect.right &&
			e.clientY >= rect.top &&
			e.clientY <= rect.bottom;

		if (!isInDialog) {
			createTodoForm.close();
		}
	});

	todoCreateBttn.addEventListener("click", (e) => {
		const newTodo = new Todo(
			newTitle.value,
			newDescription.value,
			newDueDate.value,
			newPriority.value,
		);

		localStorageSave(newTodo);
	});

	todoCreateBttn.addEventListener("close", (e) => {
		form.reset();
		localStorageLoad();
	});
}
