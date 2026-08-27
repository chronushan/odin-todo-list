export default function showDialog() {
	const todoDialog = document.querySelector("#todoDialog");
	const dialogTitle = document.querySelector(".dialogTitle");
	const dialogDescription = document.querySelector(".dialogDescription");
	const dialogDueDate = document.querySelector(".dialogDueDate");
	const dialogPriority = document.querySelector(".dialogPriority");
	const closeDialog = document.querySelector("#closeDialog");

	document.addEventListener("click", (e) => {
		if (e.target.closest(".card")) {
			todoDialog.showModal();
			dialogTitle.textContent = "Test d";
			dialogDescription.textContent = "Test d";
			dialogDueDate.textContent = "dddd";
			dialogPriority.textContent = "High";
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
