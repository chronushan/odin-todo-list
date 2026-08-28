import priorityToggle from "./todo_priority.js";

export default function showDialog() {
	const todoDialog = document.querySelector("#todoDialog");
	const dialogTitle = document.querySelector(".dialogTitle");
	const dialogDescription = document.querySelector(".dialogDescription");
	const dialogDueDate = document.querySelector(".dialogDueDate");
	const dialogPriority = document.querySelector(".dialogPriority");
	const closeDialog = document.querySelector("#closeDialog");

	document.addEventListener("click", (e) => {
		const card = e.target.closest(".card");
		const priority = e.target.closest(".priority");
		if (priority) {
			e.stopPropagation();
			priorityToggle(priority);
		} else if (card) {
			todoDialog.showModal();
			dialogTitle.textContent = card.querySelector(".title").textContent;
			dialogDescription.textContent =
				card.querySelector(".description").textContent;
			dialogDueDate.textContent = card.querySelector(".dueDate").textContent;
			dialogPriority.textContent = card.querySelector(".priority").textContent;
			dialogPriority.setAttribute(
				"data-priority",
				card.querySelector(".priority").getAttribute("data-priority"),
			);
		}
	});

	todoDialog.addEventListener("click", (e) => {
		const rect = todoDialog.getBoundingClientRect();
		const isInDialog =
			e.clientX >= rect.left &&
			e.clientX <= rect.right &&
			e.clientY >= rect.top &&
			e.clientY <= rect.bottom;

		if (!isInDialog) {
			todoDialog.close();
		}
	});

	closeDialog.addEventListener("click", (e) => todoDialog.close());
}
