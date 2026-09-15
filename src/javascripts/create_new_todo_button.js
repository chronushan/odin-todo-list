export default function newTodoButton() {
	const newTodo = document.querySelector("#new_todo");
	const createTodoForm = document.querySelector("#createTodoForm");
	const TodoClose = document.querySelector("#TodoClose");
	const form = document.querySelector("#createTodoForm form");
	const todoCreateBttn = document.querySelector("#todoCreateBttn");

	newTodo.addEventListener("click", (e) => {
		createTodoForm.showModal();
	});

	TodoClose.addEventListener("click", (e) => {
		form.reset();
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
			form.reset();
			createTodoForm.close();
		}
	});
}
