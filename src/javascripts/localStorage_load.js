export default function localStorageLoad() {
	const localStorageTodo = document.querySelector(".localStorageTodo");

	const todoJSON = JSON.parse(localStorage.getItem("Todo"));

	localStorageTodo.innerHTML = "";

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

	title.textContent = "lol";
	description.textContent = this.description;
	dueDate.textContent = formatDate(this.dueDate);
	priority.textContent = this.priority;
	statusButton.textContent = "Done";

	priority.setAttribute("data-priority", priority.textContent.trim());

	todoDiv.append(title, description, dueDate, priority, statusButton);
	localStorageTodo.append(todoDiv);

	todoDiv.setAttribute("class", "card");
	todoDiv.setAttribute("data-status", "true");
}
