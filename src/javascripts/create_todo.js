export default class Todo {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	createTodoDOM() {
		const todoDiv = document.createElement("div");
		const title = document.createElement("p");
		const description = document.createElement("p");
		const dueDate = document.createElement("p");
		const priority = document.createElement("p");

		todoDiv.classList.add("card");
		title.classList.add("title");
		description.classList.add("description");
		dueDate.classList.add("dueDate");
		priority.classList.add("priority");

		title.textContent = this.title;
		description.textContent = this.description;
		dueDate.textContent = this.dueDate;
		priority.textContent = this.priority;

		priority.setAttribute("data-priority", priority.textContent.trim());

		todoDiv.append(title, description, dueDate, priority);
		document.querySelector("#main-todo").append(todoDiv);
	}
}
