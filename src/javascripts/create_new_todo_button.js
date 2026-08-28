export default function newTodoButton() {
	const newTodo = document.querySelector("#new_todo");
	const createTodoForm = document.querySelector("#createTodoForm");
	const TodoClose = document.querySelector("#TodoClose");
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
}
