import { formatDate } from "./utils/dates.js";

export default function localStorageLoad(value) {
	const localStorageTodo = document.querySelector(".localStorageTodo");

	const todoJSON = JSON.parse(localStorage.getItem("Todo"));

	localStorageTodo.innerHTML = "";

	const todoDiv = document.createElement("div");
	const title = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");
	const statusButton = document.createElement("button");

	let arr = JSON.parse(localStorage.getItem("Todo"));

	todoDiv.classList.add("card");
	todoDiv.setAttribute("data-id", arr.length);
	todoDiv.setAttribute("class", "card");
	todoDiv.setAttribute("data-status", "true");
	title.classList.add("title");
	description.classList.add("description");
	dueDate.classList.add("dueDate");
	priority.classList.add("priority");
	priority.setAttribute("id", "cardPriority");
	statusButton.classList.add("status");

	arr.forEach((item) => {
		title.textContent = item.title;
		description.textContent = item.description;
		dueDate.textContent = formatDate(item.dueDate);
		priority.textContent = item.priority;
	});

	statusButton.textContent = "Done";

	priority.setAttribute("data-priority", priority.textContent.trim());

	todoDiv.append(title, description, dueDate, priority, statusButton);
	localStorageTodo.append(todoDiv);
}
