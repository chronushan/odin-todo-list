import { formatDate } from "./utils/dates";

export default function newTodoData() {
	const title = document.querySelector("#newTitle").value;
	const description = document.querySelector("#newDescription").value;
	const dueDate = document.querySelector("#newDueDate").value;

	const formatedDueDate = formatDate(dueDate);

	const priority = document.querySelector("#newPriority");
	const status = false;
}
