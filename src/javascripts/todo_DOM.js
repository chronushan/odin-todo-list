import { formatDate } from "./utils/dates.js";

export default class Todo {
	constructor(title, description, dueDate, priority, status) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.status;
	}

	createTodoDOM() {
		const todoDiv = document.createElement("div");
		const title = document.createElement("p");
		const description = document.createElement("p");
		const dueDate = document.createElement("p");
		const priority = document.createElement("p");
		const statusButton = document.createElement("button");

		todoDiv.classList.add("card");
		title.classList.add("title");
		description.classList.add("description");
		dueDate.classList.add("dueDate");
		priority.classList.add("priority");
		priority.setAttribute("id", "cardPriority");
		statusButton.classList.add("status");

		title.textContent = this.title;
		description.textContent = this.description;
		dueDate.textContent = formatDate(this.dueDate);
		priority.textContent = this.priority;
		statusButton.textContent = "Done";

		priority.setAttribute("data-priority", priority.textContent.trim());

		todoDiv.append(title, description, dueDate, priority, statusButton);
		document.querySelector("#main-todo").append(todoDiv);
	}
}
